import { useEffect, useState } from "react";

const links = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "Projects", label: "Projects" },
  { id: "contact", label: "Contact" },
];

export default function SectionNav() {
  const [active, setActive] = useState("");

  useEffect(() => {
    const sections = links
      .map((l) => document.getElementById(l.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));

    const onScroll = () => {
      if (window.scrollY < 200) setActive("");
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <nav
      aria-label="Sections"
      className="fixed top-4 left-1/2 z-50 -translate-x-1/2 rounded-full border border-white/15 bg-black/40 px-1.5 py-1.5 backdrop-blur-xl"
    >
      <ul className="flex items-center gap-1">
        {links.map((link) => (
          <li key={link.id}>
            <a
              href={`#${link.id}`}
              aria-current={active === link.id ? "true" : undefined}
              className={`block cursor-none rounded-full px-3 py-1.5 text-sm transition-colors duration-300 sm:px-4 ${
                active === link.id
                  ? "bg-[#D7263D] text-white"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}