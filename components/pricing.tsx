"use client";

import { useState } from "react";
import { Rocket, Trophy, Crown, Check } from "lucide-react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  const pricing = {
    basic: yearly ? 290 : 29,
    standard: yearly ? 490 : 49,
    premium: yearly ? 990 : 99,
  };

  return (
    <section className="w-full py-12 lg:py-24">
      <div className="max-w-340 mx-auto px-2">

        <div className="text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.05rem] font-semibold">
            Customized packages perfectly suited to your project's requirements
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <span className={!yearly ? "font-medium" : "text-gray-500"}>
              Monthly
            </span>

            <button
              onClick={() => setYearly(!yearly)}
              className={`relative w-14 h-7 rounded-full transition ${
                yearly ? "bg-orange-400" : "bg-gray-300"
              }`}
            >
              <span
                className={`absolute top-1 left-1 w-5 h-5 bg-white rounded-full transition-transform ${
                  yearly ? "translate-x-7" : ""
                }`}
              />
            </button>

            <span className={yearly ? "font-medium" : "text-gray-500"}>
              Yearly
            </span>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="bg-white rounded-3xl p-2 lg:p-6">
          <div className="grid lg:grid-cols-3 gap-4 lg:gap-0 rounded-2xl overflow-hidden">

            {/* BASIC */}
            <div className="p-6 lg:p-10 bg-white flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-black text-white">
                    <Rocket size={20} />
                  </div>
                  <span className="font-semibold text-lg">Basic</span>
                </div>

                <h2 className="text-4xl font-semibold mb-2">
                  ${pricing.basic}
                  <span className="text-sm text-gray-500">
                    {" "}
                    / {yearly ? "Year" : "Month"}
                  </span>
                </h2>

                <p className="text-gray-500 mb-8">
                  Ideal for simple portfolios with a clean, responsive layout.
                </p>

                <ul className="space-y-4 text-gray-700">
                  {[
                    "Single-page responsive portfolio",
                    "Clean template customization",
                    "Basic image gallery setup",
                    "Standard speed optimization",
                    "Email support only",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <Check size={16} />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <button className="mt-10 bg-black text-white rounded-full py-3 px-6 flex items-center justify-between">
                Get started now
                <span className="w-2 h-2 bg-red-500 rounded-full" />
              </button>
            </div>

            {/* DARK CONTAINER */}
            <div className="gap-8 lg:gap-0 lg:col-span-2 text-white grid md:grid-cols-2 lg:rounded-2xl overflow-hidden">

              {/* STANDARD */}
              <div className="p-6 lg:p-10 bg-black flex flex-col rounded-2xl lg:rounded-none justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                      <Trophy size={20} />
                    </div>
                    <span className="font-semibold text-lg">Standard</span>
                  </div>

                  <h2 className="text-4xl font-semibold mb-2">
                    ${pricing.standard}
                    <span className="text-sm text-gray-400">
                      {" "}
                      / {yearly ? "Year" : "Month"}
                    </span>
                  </h2>

                  <p className="text-gray-400 mb-8">
                    Great for growing brands needing multi-page layouts and customization.
                  </p>

                  <ul className="space-y-4 text-gray-300">
                    {[
                      "Multi-page responsive portfolio",
                      "Advanced design customization",
                      "Interactive gallery & Sliders",
                      "SEO-friendly structure setup",
                      "Priority email support",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-10 bg-white text-black rounded-full py-3 px-6 flex items-center justify-between">
                  Get started now
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </div>

              {/* PREMIUM */}
              <div className="p-6 lg:p-10 bg-black rounded-2xl lg:rounded-none flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-white/10">
                      <Crown size={20} />
                    </div>
                    <span className="font-semibold text-lg">Premium</span>
                  </div>

                  <h2 className="text-4xl font-semibold mb-2">
                    ${pricing.premium}
                    <span className="text-sm text-gray-400">
                      {" "}
                      / {yearly ? "Year" : "Month"}
                    </span>
                  </h2>

                  <p className="text-gray-400 mb-8">
                    Best for businesses needing custom design and full optimization.
                  </p>

                  <ul className="space-y-4 text-gray-300">
                    {[
                      "Fully custom portfolio design",
                      "Animated sections & Micro-interactions",
                      "High-speed optimization + CDN setup",
                      "On-page SEO + Content placement",
                      "Support with WhatsApp assistance",
                    ].map((item) => (
                      <li key={item} className="flex items-center gap-3">
                        <Check size={16} />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="mt-10 bg-white text-black rounded-full py-3 px-6 flex items-center justify-between">
                  Get started now
                  <span className="w-2 h-2 bg-red-500 rounded-full" />
                </button>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}