export default function Marquee({ items }) {
  // the list is doubled so the loop can slide exactly -50% and restart unseen
  const list = [...items, ...items];

  return (
    <div
      aria-hidden="true"
      className="marquee mt-16 overflow-hidden border-y border-white/10 py-5 lg:mt-10"
    >
      <div className="marquee-track flex w-max items-center">
        {list.map((item, index) => (
          <span key={index} className="flex items-center gap-8 pr-8">
            <span className="marquee-text bbh-sans-bogle-regular text-3xl uppercase sm:text-5xl">
              {item}
            </span>
            <span className="h-2 w-2 rounded-full bg-[#D7263D]"></span>
          </span>
        ))}
      </div>
    </div>
  );
}