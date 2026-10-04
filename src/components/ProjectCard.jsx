export default function ProjectCard({ projects }) {
   const handleMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      e.currentTarget.style.setProperty("--x", `${e.clientX - rect.left}px`);
      e.currentTarget.style.setProperty("--y", `${e.clientY - rect.top}px`);
   };

   return (
      <article
         onMouseMove={handleMove}
         className="spotlight group relative m-3 flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] transition-colors duration-300 hover:border-[#D7263D] sm:m-5"
         data-aos="fade-up"
      >
         <div className="aspect-video overflow-hidden">
            <img
               src={projects.Project_image}
               className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
               alt={`${projects.title} preview`}
               loading="lazy"
            />
         </div>

         <div className="flex flex-1 flex-col p-5">
            <div className="flex items-start justify-between gap-3">
               <h3 className="text-xl font-bold text-white sm:text-2xl">
                  {projects.title}
               </h3>
               <div className="flex shrink-0 gap-2">
                  {projects.stack.map((project, index) => (
                     <img
                        src={project.img}
                        className="h-6 w-6 object-contain"
                        key={index}
                        alt=""
                     />
                  ))}
               </div>
            </div>

            <p className="mt-3 text-sm leading-relaxed text-gray-400">
               {projects.description}
            </p>

            {projects.link ? (
               <div className="mt-auto pt-5">
                  <a
                     href={projects.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     aria-label={`View project: ${projects.title}`}
                     className="inline-flex cursor-none items-center rounded-full border border-[#D7263D] px-4 py-1.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-[#D7263D]"
                  >
                     View project
                  </a>
               </div>
            ) : null}
         </div>
      </article>
   )
}