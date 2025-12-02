export default function ProjectCard({ projects }) {
   return (
      <>
         <div className="border-1 border-[#D7263D] m-5 rounded-2xl hover:shadow-2xl hover:shadow-red-500" data-aos="fade-up">
            <div>
                  <img src={projects.Project_image} className="w-full h-full rounded-t-2xl" alt="" />
            </div>
            <div className="flex justify-between p-2">
            <h3 className="text-white text-2xl font-bold">
               {projects.title}
            </h3>
            <p className="flex gap-2">
               {projects.stack.map((project, index) => {
                  return (
                     <>
                        <img src={project.img} className="w-7" key={index} alt="" />
                     </>
                  )
               })
            }
            </p>
            </div>
            <p className="text-gray-400 p-5 text-sm">
               {projects.description}
            </p>

         </div>
      </>
   )
}