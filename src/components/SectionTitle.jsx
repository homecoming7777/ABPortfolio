import { Fragment, useEffect, useRef, useState } from "react";

const GLYPHS = "!<>-_/[]{}=+*^?#ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";

// Section heading that "decodes" into its text when it scrolls into view,
// then draws the red divider line under it. Hover replays the decode.
export default function SectionTitle({ text, className = "" }) {
  const headingRef = useRef(null);
  const frame = useRef(0);
  const running = useRef(false);
  const [chars, setChars] = useState(() => text.split("").map(() => ""));
  const [visible, setVisible] = useState(false);

  const play = () => {
    if (running.current) return;
    running.current = true;

    const letters = text.split("");
    const start = performance.now();
    const perChar = 45; // ms between each letter locking in
    const hold = 350; // ms before the first letter locks in
    const end = (letters.length - 1) * perChar + hold;
    let last = 0;

    const tick = (now) => {
      const t = now - start;
      if (t >= end) {
        setChars(letters);
        running.current = false;
        return;
      }
      if (now - last > 45) {
        last = now;
        setChars(
          letters.map((c, i) =>
            c === " "
              ? " "
              : t >= i * perChar + hold
              ? c
              : GLYPHS[Math.floor(Math.random() * GLYPHS.length)]
          )
        );
      }
      frame.current = requestAnimationFrame(tick);
    };
    frame.current = requestAnimationFrame(tick);
  };

  useEffect(() => {
    const el = headingRef.current;
    if (!el) return;

    const reduceMotion = window.matchMedia?.(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduceMotion) {
      setChars(text.split(""));
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          play();
          observer.disconnect();
        }
      },
      { threshold: 0.6 }
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame.current);
      running.current = false;
    };
  }, [text]);

  // each letter reserves the space of its real character, so nothing
  // shifts or re-wraps while the random glyphs flicker on top
  const words = text.split(" ");
  let offset = 0;

  return (
    <>
      <h2
        ref={headingRef}
        aria-label={text}
        onMouseEnter={play}
        className={className}
      >
        {words.map((word, w) => {
          const wordStart = offset;
          offset += word.length + 1;
          return (
            <Fragment key={w}>
              {w > 0 ? " " : null}
              <span aria-hidden="true" className="inline-block whitespace-nowrap">
                {word.split("").map((c, i) => {
                  const shown = chars[wordStart + i];
                  return (
                    <span key={i} className="relative inline-block">
                      <span className="invisible">{c}</span>
                      <span
                        className={`absolute inset-0 flex items-center justify-center whitespace-nowrap ${
                          shown === c ? "" : "opacity-60"
                        }`}
                      >
                        {shown}
                      </span>
                    </span>
                  );
                })}
              </span>
            </Fragment>
          );
        })}
      </h2>

      <div
        className={`title-line h-px bg-gradient-to-r from-transparent via-red-500 to-transparent ${
          visible ? "is-visible" : ""
        }`}
      ></div>
    </>
  );
}