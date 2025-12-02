export default function SkillsCard({ skills }) {
   return (
      <>
         <div data-aos="fade-down" className=" group p-2 flex flex-col items-center  rounded-xl border border-red-500/30 group bg-gray-900/30 hover:bg-gray-800/50 transition-all duration-500">
            <div className="w-full h-full">
               <img src={`${skills.img} `} className="w-20 flex justify-self-center" alt="" />
               <h3 className="text-center text-white pt-2">{skills.name}</h3>
            </div>
         </div>
      </>
   )
}