import '../title.css';
import CustomCursor from "../components/CustomCursor";
import SkillsCard from "../components/skillsCard";
import { skills } from "../../skills";
import ProjectCard from "../components/ProjectCard";
import { projects } from "../../projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ContactForm from '../components/ContactForm';
import ScrollToTopButton from '../components/ScrollToTop';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";


export default function Home() {


   useEffect(() => {
      AOS.init(
         {
            duration: 800,
            once: false,
         }
      )
   }, []);


   const smoothScrollTo = (id) => {
      const target = document.getElementById(id);
      if (target) {
         target.scrollIntoView({
            behavior: "smooth",
            block: "start"
         });
      }
   };



   return (
      <>
         <div className="lg:cursor-none pb-10 w-full overflow-x-hidden">
            <CustomCursor />
            <div className="opacity-20 absolute -z-100 w-full h-180 sm:h-150">
               <video src="public/pinterest_video_12666442697465639_69da7491.mp4" className="w-full h-full" loop autoPlay muted></video>
            </div>
            <section className="lg:grid lg:grid-cols-2">
               <div className="pt-25 sm:pt-20 lg:pt-30">
                  <h2 data-aos="fade-down" className="text-white font-extralight text-xs ml-15 sm:ml-10 md:ml-25 lg:text-2xl">Hi, i'm Abdessamad</h2>
                  <h1 data-aos="zoom-in" className="momo-trust-display-regular text-6xl text-center text-white uppercase font-extrabold sm:text-8xl lg:text-left lg:ml-25 lg:w-150 lg:text-8xl">full-stack software developer</h1>
                  <p className="text-gray-400 font-extralight text-center mx-10 mt-2 lg:text-left lg:ml-25">I love turning ideas into clean, functional, and scalable products.</p>
                  <div className="flex justify-center font-bold text-white gap-5 mt-5 lg:justify-start lg:ml-25">
                     <button
                        onClick={() => smoothScrollTo("Projects")}
                        className="border-2 cursor-none border-[#D7263D] text-white capitalize px-3 py-2 sm:px-8 rounded-2xl focus:bg-[#D7263D] focus:text-black"
                     >
                        my projects
                     </button>

                     <button
                        onClick={() => smoothScrollTo("contact")}
                        className="border-2 cursor-none px-3 py-2 sm:px-8 rounded-2xl focus:bg-white focus:text-black"
                     >
                        Contact
                     </button>

                  </div>
               </div>
               <div data-aos="zoom-out" className="w-90 h-130 hidden lg:block ml-40 mt-10 groupe">
                  <img className="image w-full h-full rounded-2xl" src="public/me.jpg" alt="" />
               </div>
            </section>

            <section className="pb-10 lg:pt-5">
               <div className="opacity-40 absolute -z-100 w-full">
                  <img src="public/chatpngC.jpg" className="w-full h-full md:h-150 md:w-100 md:flex md:justify-self-center md:mt-50 lg:mt-10" alt="" />
               </div>
               <div>
                  <h2 data-aos="fade-left" className="bbh-sans-bogle-regular uppercase pl-5 text-5xl pt-30 text-[#D7263D] sm:pt-40 sm:text-6xl lg:pt-20">+about</h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
               </div>
               <div className="pt-5" data-aos="fade-right">
                  <p className="pl-5 opacity-70 text-gray-400 mt-3 text-left mx-5 sm:text-3xl sm:pl-10 sm:pt-20 md:mx-40">I’m a Full-Stack Developer who enjoys building modern, responsive, and user-focused web applications.<p>
                     I love transforming ideas into real products using clean code, scalable architecture, and intuitive designs. My work blends creativity with problem-solving, whether I’m developing robust APIs, designing smooth user experiences, or optimizing performance. I’m always learning new technologies, improving my skills, and challenging myself with projects that push me forward. My goal is to create digital experiences that are fast, reliable, and enjoyable for everyone who uses them.</p></p>
               </div>
            </section>
            <section className="sm:mt-60">
               <h2 className="bbh-sans-bogle-regular pl-5 text-5xl pt-10 text-[#D7263D] uppercase font-bold" data-aos="fade-left">+tech arsenal</h2>
               <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
               <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 mt-10 mx-2">
                  {skills.map((skill, index) => {
                     return (
                        <SkillsCard key={index} skills={skill} />
                     )
                  })
                  }
               </div>
            </section>


            <section id='Projects'>
               <h2 data-aos="fade-left" className="bbh-sans-bogle-regular uppercase font-bold text-5xl pt-30 text-[#D7263D] sm:pt-40 sm:text-6xl lg:pt-20">+featured projects</h2>
               <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
               <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-2 lg:mx-20">
                  {
                     projects.map((project, index) => {
                        return (
                           <ProjectCard projects={project} key={index} />
                        )
                     })
                  }
               </div>
            </section>




            <section className="pb-30" id='contact'>
               <h2 data-aos="fade-down" className="bbh-sans-bogle-regular uppercase font-bold text-5xl pt-20 text-[#D7263D] sm:pt-20 sm:text-6xl lg:pt-20 md:pt-20 text-center">+Let’s work together</h2>
               <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
               <p data-aos="zoom-out" className="text-gray-400 text-center text-sm mx-10 mt-10 md:text-2xl lg:text-3xl">I’m open to freelance work, collaborations, or full-time opportunities. If you want to build something or simply have a question, feel free to reach out.</p>
               <ContactForm />
            </section>
            <ScrollToTopButton />
            <ul className="flex gap-5 -mt-30 justify-self-center">
               <li><a href="https://instagram.com/a07070_7">
                  <FontAwesomeIcon className='text-red-500 text-2xl cursor-none' icon={faInstagram} />
               </a>
               </li>
               <li>
                  <a href="https://wa.me/0614101711">
                     <FontAwesomeIcon className='text-red-500 text-2xl cursor-none' icon={faWhatsapp} />
                  </a>
               </li>
               <li>
                  <a href="https://github.com/homecoming7777">
                     <FontAwesomeIcon className='text-red-500 text-2xl cursor-none' icon={faGithub} />
                  </a>
               </li>
            </ul>
         </div>

      </>
   )
}