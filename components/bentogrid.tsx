import Image from "next/image";

const stats = [
  {
    value: "95%",
    label: "Faster project delivery",
    shortLabel: "Faster delivery",
    quote:
      "The team delivered our website ahead of schedule with clear communication and great attention to detail.",
    shortQuote:
      "They delivered ahead of schedule with great communication.",
    author: {
      name: "Flossie Gruz",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/40?img=47",
    },
  },
  {
    value: "99%",
    label: "Client satisfaction rate",
    shortLabel: "Client satisfaction",
    quote:
      "From strategy to launch, everything felt seamless. The design, performance and overall experience exceeded our expectations and goals.",
    shortQuote:
      "Everything felt seamless from strategy to launch.",
    author: {
      name: "Lincoln Dias",
      role: "Founder & CEO",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
  },
];

const bottomTestimonials = [
  {
    quote:
      "They quickly understood our vision and turned it into a strong digital experience.",
    shortQuote:
      "They turned our vision into a strong digital experience.",
    author: {
      name: "Aggy Galkin",
      role: "Marketing Lead",
      avatar: "https://i.pravatar.cc/40?img=44",
    },
  },
  {
    quote:
      "A seamless process with a polished, fast and easy-to-manage result.",
    shortQuote:
      "A seamless and polished result.",
    author: {
      name: "Davis Bergson",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/40?img=33",
    },
  },
];

function QuoteIcon() {
  return (
    <span className="text-[#e63c2f] text-3xl sm:text-4xl font-black leading-none select-none">
      ❝
    </span>
  );
}

function Avatar({
  src,
  alt,
  name,
  role,
  light = true,
}: {
  src: string;
  alt: string;
  name: string;
  role: string;
  light?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="rounded-full object-cover w-9 h-9 sm:w-10 sm:h-10"
      />
      <div>
        <p
          className={`font-semibold text-sm ${
            light ? "text-gray-900" : "text-white"
          }`}
        >
          {name}
        </p>
        <p
          className={`text-xs ${
            light ? "text-gray-500" : "text-gray-400"
          }`}
        >
          {role}
        </p>
      </div>
    </div>
  );
}

function StatCard({
  value,
  label,
  shortLabel,
  quote,
  shortQuote,
  author,
}: (typeof stats)[number]) {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 flex flex-col justify-between min-h-[240px] sm:min-h-[300px]">
      
      {/* Stat */}
      <div className="flex items-center gap-3 mb-4 sm:mb-6">
        <span className="text-5xl sm:text-7xl font-black text-gray-900 leading-none">
          {value}
        </span>

        {/* Desktop label */}
        <span className="hidden sm:block text-base font-semibold text-gray-900 leading-tight max-w-[150px]">
          {label}
        </span>

        {/* Mobile label */}
        <span className="block sm:hidden text-sm font-semibold text-gray-900 leading-tight max-w-[110px]">
          {shortLabel}
        </span>
      </div>

      {/* Quote */}
      <div className="flex flex-col gap-4">
        <QuoteIcon />

        {/* Desktop Quote */}
        <p className="hidden sm:block text-gray-600 text-sm leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>

        {/* Mobile Quote */}
        <p className="block sm:hidden text-gray-600 text-sm leading-relaxed">
          &ldquo;{shortQuote}&rdquo;
        </p>

        <Avatar
          src={author.avatar}
          alt={author.name}
          name={author.name}
          role={author.role}
        />
      </div>
    </div>
  );
}

function DottedCard({
  quote,
  shortQuote,
  author,
}: (typeof bottomTestimonials)[0]) {
  return (
    <div className="rounded-2xl sm:rounded-3xl p-6 sm:p-7 bg-white flex flex-col justify-between min-h-[220px] sm:min-h-[260px]">
      <div className="flex flex-col gap-3">
        <QuoteIcon />

        <p className="hidden sm:block text-gray-700 text-sm leading-relaxed">
          &ldquo;{quote}&rdquo;
        </p>

        <p className="block sm:hidden text-gray-700 text-sm leading-relaxed">
          &ldquo;{shortQuote}&rdquo;
        </p>
      </div>

      <Avatar
        src={author.avatar}
        alt={author.name}
        name={author.name}
        role={author.role}
      />
    </div>
  );
}

function DarkCard({
  quote,
  shortQuote,
  author,
}: (typeof bottomTestimonials)[1]) {
  return (
    <div className="bg-gray-900 rounded-2xl sm:rounded-3xl p-6 sm:p-7 flex flex-col justify-between min-h-[220px] sm:min-h-[260px]">
      <div className="flex flex-col gap-4">
        <QuoteIcon />

        <p className="hidden sm:block text-white font-semibold text-base leading-snug">
          &ldquo;{quote}&rdquo;
        </p>

        <p className="block sm:hidden text-white font-semibold text-sm leading-snug">
          &ldquo;{shortQuote}&rdquo;
        </p>
      </div>

      <Avatar
        src={author.avatar}
        alt={author.name}
        name={author.name}
        role={author.role}
        light={false}
      />
    </div>
  );
}

function ImageCard() {
  return (
    <div className="rounded-2xl sm:rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px] relative">
      <Image
        src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80"
        alt="Abstract waves texture"
        fill
        className="object-cover"
      />
    </div>
  );
}

export default function BentoGrid() {
  return (
    <section className="bg-[#f5f5f0]">
      <div className="max-w-340 mx-auto">

        {/* MOBILE: stacked */}
        {/* DESKTOP: bento grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

          {/* TOP ROW */}
          {stats.map((stat) => (
            <StatCard key={stat.author.name} {...stat} />
          ))}

          {/* BOTTOM ROW */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 sm:col-span-2">
            <DottedCard {...bottomTestimonials[0]} />
            <DarkCard {...bottomTestimonials[1]} />
            <ImageCard />
          </div>

        </div>
      </div>
    </section>
  );
}