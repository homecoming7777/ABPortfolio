import { ArrowUpRight } from "lucide-react";

// "https://www.example.com/x" -> "example.com" (shown in the browser bar)
const hostOf = (url) => {
   try {
      return new URL(url).hostname.replace(/^www\./, "");
   } catch {
      return "";
   }
};

export default function ProjectCard({ projects, reverse = false }) {
   const host = projects.link ? hostOf(projects.link) : "";

   // feeds the cursor position to the glow in index.css
   const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
   };

   const screenshot = (
      <div
         onMouseMove={handleMove}
         className="spotlight group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] shadow-2xl transition-colors duration-300 hover:border-[#D7263D]"
      >
         <div className="flex items-center gap-2 border-b border-white/10 px-4 py-2.5">
            <span className="flex gap-1.5" aria-hidden="true">
               <span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
               <span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
               <span className="h-2.5 w-2.5 rounded-full bg-white/20"></span>
            </span>
            <span className="mx-auto max-w-[60%] truncate rounded-md bg-white/5 px-3 py-0.5 text-xs text-gray-400">
               {host || projects.title}
            </span>
            <span className="w-[42px]" aria-hidden="true"></span>
         </div>

         <div className="aspect-video overflow-hidden">
            <img
               src={projects.Project_image}
               className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
               alt={`${projects.title} preview`}
               loading="lazy"
            />
         </div>
      </div>
   );

   return (
      <article
         data-aos="fade-up"
         className={`flex flex-col gap-6 lg:items-center lg:gap-12 ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}`}
      >
         <div className="lg:w-3/5">
            {projects.link ? (
               // the button below is the accessible link; this one is a bigger click target
               <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="block cursor-none"
               >
                  {screenshot}
               </a>
            ) : (
               screenshot
            )}
         </div>

         <div className="lg:w-2/5">
            <h3 className="bbh-sans-bogle-regular text-3xl text-white sm:text-4xl">
               {projects.title}
            </h3>

            <ul className="mt-4 flex flex-wrap gap-2">
               {projects.stack.map((tech, index) => (
                  <li
                     key={index}
                     className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5"
                  >
                     <img src={tech.img} className="h-5 w-5 object-contain" alt="" />
                  </li>
               ))}
            </ul>

            <p className="mt-5 max-w-md leading-relaxed text-gray-300">
               {projects.description}
            </p>

            {projects.link ? (
               <a
                  href={projects.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View project: ${projects.title}`}
                  className="mt-6 inline-flex cursor-none items-center gap-2 rounded-full bg-[#D7263D] px-5 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-white hover:text-black"
               >
                  View project
                  <ArrowUpRight size={16} aria-hidden="true" />
               </a>
            ) : null}
         </div>
      </article>
   );
}