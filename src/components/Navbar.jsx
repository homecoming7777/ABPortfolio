import { NavLink } from "react-router-dom"


export default function Navbar() {
   return (
      <>
         <header className="border-2 bg-transparent cursor-none backdrop-blur-[20px] z-50 border-[#D7263D] justify-self-center m-5 fixed py-1.5 h-fit w-fit rounded-full sm:w-100 md:w-100">
            <nav className="rounded-full">
               <ul className="flex gap-5 justify-center cursor-none sm:justify-between">
                  <li className="text-center">
                     <NavLink to="/" className={({ isActive }) => 
                        isActive ? "text-[#D7263D] font-semibold cursor-none bg-gray-800 rounded-full px-3 py-1.5 uppercase sm:text-xl" : "cursor-none text-white capitalize font-light px-2 sm:text-xl hover:bg-gray-600 hover:py-2 hover:rounded-full"
                     }>
                        Home
                     </NavLink>
                  </li>

                  <li className="px-2 text-center">
                     <NavLink to="/Projects" className={({ isActive }) =>
                        isActive ? "text-[#D7263D] font-semibold cursor-none bg-gray-800 rounded-full px-3 py-1.5 uppercase sm:text-xl" : "cursor-none text-white capitalize font-light px-2 sm:text-xl hover:bg-gray-600 hover:py-2 hover:rounded-full"
                     }>
                     projects
                     </NavLink>
                     </li>

                  <li className="text-center">
                     <NavLink to="/Contact" className={({ isActive }) =>
                        isActive ? "text-[#D7263D] font-semibold cursor-none bg-gray-800 rounded-full px-3 py-1.5 uppercase sm:text-xl" : "cursor-none text-white capitalize font-light px-2 sm:text-xl hover:bg-gray-600 hover:py-2 hover:rounded-full"
                     }>
                     contact
                     </NavLink>
                     </li>
               </ul>
            </nav>
         </header>
      </>
   )
}