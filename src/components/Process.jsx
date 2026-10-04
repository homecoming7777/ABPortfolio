const steps = [
  {
    title: "Discuss",
    text: "We agree on goals, scope, and timeline before any code is written.",
  },
  {
    title: "Design",
    text: "I sketch the structure and key screens so you can react early.",
  },
  {
    title: "Build",
    text: "I develop in small steps and share working builds along the way.",
  },
  {
    title: "Launch",
    text: "I deploy, test on real devices, and stay available for fixes.",
  },
];

export default function Process() {
  return (
    <section id="process">
      <h2
        data-aos="fade-up"
        className="section-title bbh-sans-bogle-regular uppercase font-bold px-6 pb-3 text-4xl pt-24 text-[#D7263D] sm:pt-32 sm:text-6xl lg:pt-20 lg:px-12"
      >
        +how i work
      </h2>

      <div className="h-px bg-gradient-to-r from-transparent via-red-500 to-transparent"></div>

      <ol className="mt-10 mx-6 grid max-w-6xl gap-8 sm:grid-cols-2 lg:mx-auto lg:grid-cols-4 lg:gap-6">
        {steps.map((step, index) => (
          <li
            key={step.title}
            data-aos="fade-up"
            className="border-t-2 border-[#D7263D] pt-4"
          >
            <span className="text-sm text-[#D7263D]">Step {index + 1}</span>
            <h3 className="mt-1 text-xl font-bold text-white">{step.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-gray-300">
              {step.text}
            </p>
          </li>
        ))}
      </ol>
    </section>
  );
}