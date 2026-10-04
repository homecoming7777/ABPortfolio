const services = [
  {
    title: "Frontend interfaces",
    text: "Responsive React and TypeScript interfaces that load fast, work on every screen size, and follow your design.",
  },
  {
    title: "Backend and APIs",
    text: "Laravel and MySQL back ends: authentication, REST APIs, and databases built to grow with your product.",
  },
  {
    title: "Full-stack web apps",
    text: "From idea to launch, I build the whole product, front end to back end, and keep the code easy to maintain.",
  },
];

export default function Services() {
  return (
    <section id="services">
      <h2
        data-aos="fade-up"
        className="section-title bbh-sans-bogle-regular uppercase font-bold px-6 pb-3 text-4xl pt-24 text-[#D7263D] sm:pt-32 sm:text-6xl lg:pt-20 lg:px-12"
      >
        +what i do
      </h2>

      <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <ul className="mt-10 mx-6 max-w-5xl divide-y divide-white/10 border-y border-white/10 lg:mx-auto">
        {services.map((service) => (
          <li
            key={service.title}
            data-aos="fade-up"
            className="grid gap-2 py-6 md:grid-cols-[1fr_2fr] md:gap-10 md:py-8"
          >
            <h3 className="text-xl font-bold text-white sm:text-2xl">
              {service.title}
            </h3>
            <p className="max-w-xl leading-relaxed text-gray-300">
              {service.text}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}