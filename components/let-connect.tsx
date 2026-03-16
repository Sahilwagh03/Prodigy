"use client";

import { ArrowUpRight } from "lucide-react";

export default function LetConnect() {
  return (
    <section className="w-full pt-12 lg:pt-24">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-4xl lg:text-5xl font-semibold leading-tight">
              Let’s connect! <br /> Reach out anytime!
            </h2>

            <div className="mt-16 grid grid-cols-2 gap-y-10 text-sm">
              <div>
                <p className="text-gray-500 uppercase text-[.875rem] leading-[1.71] tracking-[.0675rem] font-semibold">
                  Email
                </p>
                <p className="text-[1.125rem] leading-[1.45] tracking-[-.033rem] mt-2 font-semibold">
                  prodigy-labs@gmail.com
                </p>
              </div>

              <div>
                <p className="text-gray-500 uppercase text-[.875rem] leading-[1.71] tracking-[.0675rem] font-semibold">
                  Phone
                </p>
                <p className="text-[1.125rem] leading-[1.45] tracking-[-.033rem] mt-2 font-semibold">
                  +91 9324235779
                </p>
              </div>

              <div className="col-span-2">
                <p className="text-gray-500 uppercase text-[.875rem] leading-[1.71] tracking-[.0675rem] font-semibold">
                  Location
                </p>
                <p className="text-[1.125rem] leading-[1.45] tracking-[-.033rem] mt-2 font-semibold">
                  Ghatkopar West, Mumbai <br />
                  400084, Maharashtra, India
                </p>
              </div>
            </div>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-10 mt-20 text-sm font-medium">
            <a className="text-[1.125rem] leading-[1.45] tracking-[-.033rem] font-semibold flex items-center gap-2 hover:opacity-70 transition">
              Facebook <ArrowUpRight size={16} />
            </a>
            <a className="text-[1.125rem] leading-[1.45] tracking-[-.033rem] font-semibold flex items-center gap-2 hover:opacity-70 transition">
              Linkedin <ArrowUpRight size={16} />
            </a>
            <a className="text-[1.125rem] leading-[1.45] tracking-[-.033rem] font-semibold flex items-center gap-2 hover:opacity-70 transition">
              Instagram <ArrowUpRight size={16} />
            </a>
          </div>
        </div>

        {/* FORM CARD */}
        <div className="bg-white rounded-3xl p-10">
          <form className="space-y-10">
            <div>
              <input
                type="text"
                placeholder="Enter your name*"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="email"
                placeholder="Your email*"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />

              <input
                type="tel"
                placeholder="Your phone*"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <input
                type="text"
                placeholder="Company name*"
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-black transition"
              />

              <select className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-black transition text-gray-500">
                <option>Select your budget...</option>
                <option>$2k - $5k</option>
                <option>$5k - $10k</option>
                <option>$10k+</option>
              </select>
            </div>

            <div>
              <textarea
                placeholder="Enter your message..."
                rows={4}
                className="w-full bg-transparent border-b border-gray-300 py-3 outline-none focus:border-black transition resize-none"
              />
            </div>

            {/* SUBMIT BUTTON */}
            <button
              type="submit"
              className="relative w-full bg-black text-white py-3 rounded-full flex items-center justify-center font-medium hover:opacity-90 transition"
            >
              Submit
              <span className="absolute right-4 w-2 h-2 bg-red-500 rounded-full"></span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
