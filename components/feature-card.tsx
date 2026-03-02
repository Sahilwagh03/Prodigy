"use client";
import Image from "next/image";

interface FeatureCardProps {
  title: string;
  year: string;
  image: string;
}

export default function FeatureCard({ title, year, image }: FeatureCardProps) {
  return (
    <div className="w-full">
      <div className="block relative">
        <div className="relative rounded-3xl overflow-hidden h-80 lg:h-180">
          <Image
            src={image}
            alt={title}
            width={1200}
            height={800}
            className="w-full h-full object-cover object-center"
          />
        </div>
        <div className="flex justify-between items-center py-6 border-b border-gray-300">
          <h3 className="text-xl font-semibold">{title}</h3>
          <span className="text-gray-500">{year}</span>
        </div>
      </div>
    </div>
  );
}
