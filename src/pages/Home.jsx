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
import SectionNav from "../components/SectionNav";
import ScrollProgress from "../components/ScrollProgress";
import Services from "../components/Services";
import Process from "../components/Process";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

export default function Home() {

   useEffect(() => {
      AOS.init({
         duration: 800,
         once: true,
      });
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
         <div className="lg:cursor-none pb-10 w-full overflow-x-hidden relative overflow-hidden">
            <CustomCursor />
            <ScrollProgress />
            <SectionNav />

            <div className="absolute -z-100 w-full h-180 sm:h-150 overflow-hidden">
               <video
                  src="pinterest_video_12666442697465639_69da7491.mp4"
                  className="w-full h-full object-cover opacity-20"
                  loop
                  autoPlay
                  muted
                  playsInline
                  aria-hidden="true"
               />
               <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black"></div>
            </div>

            <section className="lg:grid lg:grid-cols-2 max-w-7xl mx-auto">
               <div className="pt-28 sm:pt-24 lg:pt-32 px-6 lg:pl-25 lg:pr-6">
                  <img
                     src="me.jpg"
                     alt="Abdessamad"
                     className="mx-auto mb-5 h-24 w-24 rounded-full border-2 border-[#D7263D] object-cover lg:hidden"
                  />
                  <h2
                     data-aos="fade-down"
                     className="text-gray-300 font-light text-base text-center mb-2 lg:text-left lg:text-2xl"
                  >
                     Hi, I'm Abdessamad
                  </h2>

                  <h2
                     data-aos="zoom-in"
                     className="momo-trust-display-regular  text-6xl leading-[0.95] tracking-tight text-center text-white uppercase font-extrabold sm:text-8xl lg:text-left lg:max-w-150 lg:text-8xl"
                  >
                     full-stack software developer
                  </h2>

                  <p className="text-gray-300 font-light text-center max-w-md mx-auto mt-5 lg:text-left lg:mx-0">
                     I love turning ideas into clean, functional, and scalable products.
                  </p>

                  <div className="flex justify-center font-bold text-white gap-4 mt-8 lg:justify-start">
                     <button
                        onClick={() => smoothScrollTo("Projects")}
                        className="border-2 cursor-none border-[#D7263D] bg-[#D7263D] text-white capitalize px-5 py-2.5 sm:px-8 rounded-2xl transition-colors duration-300 hover:bg-white hover:border-white hover:text-black"
                     >
                        my projects
                     </button>

                     <button
                        onClick={() => smoothScrollTo("contact")}
                        className="border-2 cursor-none border-white/30 px-5 py-2.5 sm:px-8 rounded-2xl transition-colors duration-300 hover:bg-white hover:border-white hover:text-black"
                     >
                        Contact
                     </button>
                  </div>

                  <p className="mt-8 mx-auto flex w-fit items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-gray-300 lg:mx-0">
                     <span className="relative flex h-2 w-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#D7263D] opacity-75"></span>
                        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#D7263D]"></span>
                     </span>
                     Open to freelance and full-time work
                  </p>
               </div>

               <div
                  data-aos="zoom-out"
                  className="w-90 h-130 hidden lg:block mt-10 groupe mx-auto"
               >
                  <img
                     className="image w-full h-full rounded-2xl"
                     src="me.jpg"
                     alt="Portrait of Abdessamad"
                  />
               </div>
            </section>

            <section id="about" className="pb-10 lg:pt-5">
               <div className="opacity-40 absolute -z-100 w-full overflow-hidden">
                  <img
                     src="chatpngC.jpg"
                     className="w-full h-full md:h-150 md:w-100 md:flex md:justify-self-center md:mt-50 lg:mt-10"
                     alt=""
                  />
               </div>

               <div>
                  <h2
                     data-aos="fade-up"
                     className="section-title bbh-sans-bogle-regular uppercase px-6 pb-3 text-4xl pt-24 text-[#D7263D] sm:pt-32 sm:text-6xl lg:pt-20 lg:px-12"
                  >
                     +about
                  </h2>
                  <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>
               </div>

               <div className="pt-8 px-6 max-w-3xl mx-auto sm:pt-16" data-aos="fade-up">
                  <div className="text-left">
                     <p className="text-xl leading-snug text-white sm:text-3xl">
                     I’m a Full-Stack Developer who enjoys building modern, responsive, and user-focused web applications.
                     </p>
                     <p className="mt-6 text-base leading-relaxed text-gray-300 sm:text-lg">
                        I love transforming ideas into real products using clean code, scalable architecture, and intuitive designs. My work blends creativity with problem-solving, whether I’m developing robust APIs, designing smooth user experiences, or optimizing performance. I’m always learning new technologies, improving my skills, and challenging myself with projects that push me forward. My goal is to create digital experiences that are fast, reliable, and enjoyable for everyone who uses them.
                     </p>
                  </div>
               </div>
            </section>

            <section id="skills" className="sm:mt-60">
               <h2
                  className="section-title bbh-sans-bogle-regular px-6 pb-3 text-4xl pt-10 text-[#D7263D] uppercase font-bold sm:text-6xl lg:px-12"
                  data-aos="fade-up"
               >
                  +tech arsenal
               </h2>

               <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

               <div data-aos="fade-up" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 mt-10 px-4 max-w-6xl mx-auto">
                  {skills.map((skill, index) => (
                     <SkillsCard key={index} skills={skill} />
                  ))}
               </div>
            </section>

            <Services />

            <section id='Projects'>
               <h2
                  data-aos="fade-up"
                  className="section-title bbh-sans-bogle-regular uppercase font-bold px-6 pb-3 text-4xl pt-24 text-[#D7263D] sm:pt-32 sm:text-6xl lg:pt-20 lg:px-12"
               >
                  +featured projects
               </h2>

               <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

               <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 max-w-6xl mx-auto px-1 sm:px-0">
                  {projects.map((project, index) => (
                     <ProjectCard projects={project} key={index} />
                  ))}
               </div>
            </section>

            <Process />

            <section className="pb-10" id='contact'>
               <h2
                  data-aos="fade-up"
                  className="section-title bbh-sans-bogle-regular uppercase font-bold px-6 pb-3 text-4xl pt-20 text-[#D7263D] sm:text-6xl text-center"
               >
                  +Let’s work together
               </h2>

               <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

               <p
                  data-aos="zoom-out"
                  className="text-gray-300 text-center text-base max-w-2xl mx-6 sm:mx-auto mt-10 md:text-lg lg:text-xl"
               >
                  I’m open to freelance work, collaborations, or full-time opportunities. If you want to build something or simply have a question, feel free to reach out.
               </p>

               <ContactForm />
            </section>

            <ScrollToTopButton />

            <footer className="mx-6 mt-10 border-t border-white/10 pt-8 sm:mx-12">
               <ul className="flex justify-center gap-4">
                  <li>
                     <a href="https://instagram.com/a07070_7" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D7263D] transition-colors duration-300 hover:border-[#D7263D] hover:bg-[#D7263D] hover:text-white">
                        <FontAwesomeIcon className="text-xl cursor-none" icon={faInstagram} />
                     </a>
                  </li>
                  <li>
                     <a href="https://wa.me/212614101711" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D7263D] transition-colors duration-300 hover:border-[#D7263D] hover:bg-[#D7263D] hover:text-white">
                        <FontAwesomeIcon className="text-xl cursor-none" icon={faWhatsapp} />
                     </a>
                  </li>
                  <li>
                     <a href="https://github.com/homecoming7777" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-[#D7263D] transition-colors duration-300 hover:border-[#D7263D] hover:bg-[#D7263D] hover:text-white">
                        <FontAwesomeIcon className="text-xl cursor-none" icon={faGithub} />
                     </a>
                  </li>
               </ul>
               <p className="mt-6 text-center text-xs text-gray-500">
                  © {new Date().getFullYear()} Abdessamad. All rights reserved.
               </p>
            </footer>
         </div>
      </>
   );
}