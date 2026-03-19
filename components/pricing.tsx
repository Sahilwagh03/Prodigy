"use client";

import { useState } from "react";
import { Rocket, Trophy, Crown, Check } from "lucide-react";

export default function Pricing() {
  const [yearly, setYearly] = useState(false);

  // ✅ Fixed one-time pricing (toggle doesn't affect now)
  const pricing = {
    basic: 8000,
    standard: 15000,
    premium: 22000,
  };

  return (
    <section className="w-full py-12 lg:py-24">
      <div className="max-w-340 mx-auto px-2">
        <div className="text-center mb-6 lg:mb-12 max-w-3xl mx-auto">
          <h2 className="text-[clamp(1.6rem,3vw,2.5rem)] leading-tight tracking-[-.05rem] font-semibold">
            Customized packages perfectly suited to your project's requirements
          </h2>
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
                  ₹{pricing.basic.toLocaleString()}
                </h2>

                <p className="text-gray-500 mb-8">
                  Ideal for simple portfolios or personal websites.
                </p>

                <ul className="space-y-4 text-gray-700">
                  {[
                    "Single-page responsive website",
                    "Clean modern UI design",
                    "Basic image/gallery setup",
                    "Mobile optimization",
                    "Email support",
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
                    ₹{pricing.standard.toLocaleString()}
                  </h2>

                  <p className="text-gray-400 mb-8">
                    Perfect for startups and growing brands.
                  </p>

                  <ul className="space-y-4 text-gray-300">
                    {[
                      "Multi-page website (3–5 pages)",
                      "Custom UI/UX design",
                      "Interactive sections & sliders",
                      "SEO-ready structure",
                      "Priority support",
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
                    ₹{pricing.premium.toLocaleString()}
                  </h2>

                  <p className="text-gray-400 mb-8">
                    Best for businesses needing custom design and high
                    performance.
                  </p>

                  <ul className="space-y-4 text-gray-300">
                    {[
                      "Fully custom website design",
                      "Animations & micro-interactions (GSAP)",
                      "Performance optimization",
                      "SEO + content structure",
                      "WhatsApp + priority support",
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
