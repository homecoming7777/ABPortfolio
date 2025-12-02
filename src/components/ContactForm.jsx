import { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function ContactForm() {
   useEffect(() => {
      AOS.init({ duration: 800, once: false });
   }, []);

   const [formData, setFormData] = useState({
      name: "",
      email: "",
      message: "",
   });

   const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(formData);
      alert("Message sent!");
   };

   return (
      <div className="w-full flex justify-center mt-10 mb-10 px-5 cursor-none">
         <form
            onSubmit={handleSubmit}
            data-aos="fade-up"
            className="relative cursor-none backdrop-blur-2xl bg-white/5 border border-white/10 p-10 rounded-3xl shadow-2xl w-full max-w-2xl"
         >
            {/* Glow Effect */}
            <div className="absolute inset-0 rounded-3xl -z-10 bg-gradient-to-br from-[#D7263D]/30 via-transparent to-[#D7263D]/10 blur-2xl"></div>

            {/* NAME INPUT */}
            <div className="relative mb-8">
               <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="peer w-full cursor-none px-4 py-3 bg-transparent border-b-2 border-white/30 text-white outline-none 
                             focus:border-[#D7263D] transition-all placeholder-transparent"
                  placeholder="Your Name"
               />
               <label
                  className="absolute cursor-none left-4 top-3 text-gray-400 text-sm transition-all
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                             peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#D7263D]
                             peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs"
               >
                  Your Name
               </label>
            </div>

            {/* EMAIL INPUT */}
            <div className="relative mb-8">
               <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="peer cursor-none w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white outline-none 
                             focus:border-[#D7263D] transition-all placeholder-transparent"
                  placeholder="Your Email"
               />
               <label
                  className="absolute cursor-none left-4 top-3 text-gray-400 text-sm transition-all
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                             peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#D7263D]
                             peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs"
               >
                  Your Email
               </label>
            </div>

            {/* MESSAGE TEXTAREA */}
            <div className="relative mb-10">
               <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  className="peer cursor-none w-full px-4 py-3 bg-transparent border-b-2 border-white/30 text-white outline-none
                             focus:border-[#D7263D] transition-all placeholder-transparent resize-none"
                  placeholder="Your Message"
               ></textarea>
               <label
                  className="absolute cursor-none left-4 top-3 text-gray-400 text-sm transition-all
                             peer-placeholder-shown:top-3 peer-placeholder-shown:text-base
                             peer-focus:top-[-10px] peer-focus:text-xs peer-focus:text-[#D7263D]
                             peer-[:not(:placeholder-shown)]:top-[-10px] peer-[:not(:placeholder-shown)]:text-xs"
               >
                  Your Message
               </label>
            </div>

            {/* BUTTON */}
            <button
               type="submit"
               className="w-full py-3 rounded-xl font-bold text-white border border-[#D7263D] 
                          hover:bg-[#D7263D] hover:text-black transition-all tracking-wide 
                          shadow-lg hover:shadow-[#D7263D]/40 cursor-none"
            >
               Send Message
            </button>
         </form>
      </div>
   );
}
