import { useEffect, useRef } from "react";

export default function CustomCursor() {
  const dotRef = useRef(null);
  const outlineRef = useRef(null);
  const pos = useRef({ x: 0, y: 0 });
  const mouse = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouse.current.x = e.clientX;
      mouse.current.y = e.clientY;

      const interactive =
        e.target instanceof Element &&
        e.target.closest("a, button, input, textarea, [role='button']");
      if (outlineRef.current) {
        outlineRef.current.style.scale = interactive ? "1.8" : "1";
      }
      if (dotRef.current) {
        dotRef.current.style.left = `${e.clientX}px`;
        dotRef.current.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    let rafId;
    const render = () => {
      pos.current.x += (mouse.current.x - pos.current.x) * 0.15;
      pos.current.y += (mouse.current.y - pos.current.y) * 0.15;
      if (outlineRef.current) {
        outlineRef.current.style.left = `${pos.current.x}px`;
        outlineRef.current.style.top = `${pos.current.y}px`;
      }
      rafId = requestAnimationFrame(render);
    };
    render();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <div
        ref={outlineRef}
        className="pointer-events-none z-100 fixed hidden lg:block w-8 h-8 rounded-full border-2 border-red-400/60 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-200"
        style={{ left: "0px", top: "0px", transition: "scale 150ms ease-out" }}
      />

      <div
        ref={dotRef}
        className="pointer-events-none fixed z-100 hidden lg:block w-3 h-3 rounded-full bg-red-500 transform -translate-x-1/2 -translate-y-1/2 transition-opacity duration-150"
        style={{ left: "0px", top: "0px" }}
      />
    </>
  );
}