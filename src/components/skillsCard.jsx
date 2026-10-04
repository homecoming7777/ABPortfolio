export default function SkillsCard({ skills }) {
   return (
      <div className="group flex flex-col items-center rounded-xl border border-white/10 bg-white/[0.03] p-4 transition-colors duration-300 hover:border-[#D7263D]/60 hover:bg-[#D7263D]/10">
         <img
            src={skills.img}
            className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110"
            alt=""
            loading="lazy"
         />
         <h3 className="mt-3 text-center text-sm text-gray-300 transition-colors group-hover:text-white">
            {skills.name}
         </h3>
      </div>
   )
}