import Image from "next/image";

const stats = [
  {
    value: "95%",
    label: "Faster project delivery",
    quote:
      "The team delivered our website ahead of schedule with clear communication and great attention to detail.",
    author: {
      name: "Flossie Gruz",
      role: "Product Manager",
      avatar: "https://i.pravatar.cc/40?img=47",
    },
    theme: "light",
  },
  {
    value: "99%",
    label: "Client satisfaction rate",
    quote:
      "From strategy to launch, everything felt seamless. The design, performance and overall experience exceeded our expectations and goals.",
    author: {
      name: "Lincoln Dias",
      role: "Founder & CEO",
      avatar: "https://i.pravatar.cc/40?img=12",
    },
    theme: "light",
  },
];

const bottomTestimonials = [
  {
    quote:
      "They quickly understood our vision and turned it into a strong digital experience.",
    author: {
      name: "Aggy Galkin",
      role: "Marketing Lead",
      avatar: "https://i.pravatar.cc/40?img=44",
    },
    theme: "dotted",
  },
  {
    quote:
      "A seamless process with a polished, fast and easy-to-manage result.",
    author: {
      name: "Davis Bergson",
      role: "Creative Director",
      avatar: "https://i.pravatar.cc/40?img=33",
    },
    theme: "dark",
  },
];

function QuoteIcon() {
  return (
    <span className="text-[#e63c2f] text-4xl font-black leading-none select-none">
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
        className="rounded-full object-cover w-10 h-10"
      />
      <div>
        <p className={`font-semibold text-sm ${light ? "text-gray-900" : "text-white"}`}>
          {name}
        </p>
        <p className={`text-xs ${light ? "text-gray-500" : "text-gray-400"}`}>
          {role}
        </p>
      </div>
    </div>
  );
}

// Top stat cards (light theme)
function StatCard({
  value,
  label,
  quote,
  author,
}: (typeof stats)[number]) {
  return (
    <div className="bg-white rounded-3xl p-8 flex flex-col justify-between min-h-75">
      {/* Stat */}
      <div className="flex items-center gap-3 mb-6">
        <span className="text-7xl font-black text-gray-900 leading-none">
          {value}
        </span>
        <span className="text-base font-semibold text-gray-900 leading-tight max-w-37.5">
          {label}
        </span>
      </div>
      {/* Quote block */}
      <div className="flex flex-col gap-4">
        <QuoteIcon />
        <p className="text-gray-600 text-sm leading-relaxed">&ldquo;{quote}&rdquo;</p>
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

// Bottom-left dotted card
function DottedCard({ quote, author }: (typeof bottomTestimonials)[0]) {
  return (
    <div
      className="rounded-3xl p-7 flex flex-col justify-between relative overflow-hidden min-h-65 bg-white"
    >
      <div className="relative z-10 flex flex-col justify-between h-full gap-5">
        <div className="flex flex-col gap-3">
          <QuoteIcon />
          <p className="text-gray-700 text-sm leading-relaxed">
            &ldquo;{quote}&rdquo;
          </p>
        </div>
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

// Bottom-center dark card
function DarkCard({ quote, author }: (typeof bottomTestimonials)[1]) {
  return (
    <div className="bg-gray-900 rounded-3xl p-7 flex flex-col justify-between min-h-65">
      <div className="flex flex-col gap-4">
        <QuoteIcon />
        <p className="text-white font-semibold text-base leading-snug">
          &ldquo;{quote}&rdquo;
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

// Bottom-right image card
function ImageCard() {
  return (
    <div className="rounded-3xl overflow-hidden min-h-65 relative">
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
    <section className="bg-[#f5f5f0] flex items-center justify-center">
      <div className="grid grid-cols-2 gap-3 w-full">

        {/* TOP ROW — 2 stat cards */}
        {stats.map((stat) => (
          <StatCard key={stat.author.name} {...stat} />
        ))}

        {/* BOTTOM ROW — 3 cards spanning full width */}
        <div className="col-span-2 grid grid-cols-3 gap-3">
          <DottedCard {...bottomTestimonials[0]} />
          <DarkCard {...bottomTestimonials[1]} />
          <ImageCard />
        </div>

      </div>
    </section>
  );
}