"use client";

import {
  ArrowUpRight,
  Facebook,
  Instagram,
  Twitter,
  Linkedin,
  Youtube,
  Dribbble,
} from "lucide-react";
import Link from "next/link";
import TalkButton from "../talk-button";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-6 md:px-10 pt-6 lg:pt-12 pb-5">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div className="flex flex-col justify-between gap-8 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Have any project <br /> idea in your mind!
              </h2>
              <TalkButton label="Book a free strategy call" />
            </div>

            {/* Social Icons */}
            <div className="flex items-center gap-4 text-neutral-600">
              <Link
                href="#"
                aria-label="Facebook"
                className="hover:text-black transition-colors"
              >
                <Facebook size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Instagram"
                className="hover:text-black transition-colors"
              >
                <Instagram size={18} />
              </Link>
              <Link
                href="#"
                aria-label="X"
                className="hover:text-black transition-colors"
              >
                <Twitter size={18} />
              </Link>
              <Link
                href="#"
                aria-label="LinkedIn"
                className="hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </Link>
              <Link
                href="#"
                aria-label="YouTube"
                className="hover:text-black transition-colors"
              >
                <Youtube size={18} />
              </Link>
              <Link
                href="#"
                aria-label="Dribbble"
                className="hover:text-black transition-colors"
              >
                <Dribbble size={18} />
              </Link>
            </div>
          </div>

          {/* Right Column */}
          <div className="space-y-10">
            {/* Email */}
            <a
              href="mailto:prodigy@gmail.com"
              className="text-4xl md:text-5xl font-bold tracking-tight flex items-start gap-2 hover:opacity-70 transition-opacity leading-tight"
            >
              prodigy@gmail.com
              <ArrowUpRight
                size={32}
                strokeWidth={1.5}
                className="mt-1 shrink-0"
              />
            </a>

            <div className="grid grid-cols-3 gap-6 text-sm">
              <div>
                <p className="mb-4 font-semibold uppercase">
                  Main Pages
                </p>
                <ul className="space-y-3">
                  {["Home", "About", "Projects"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="font-medium hover:opacity-60 transition-opacity"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <p className="mb-4 font-semibold uppercase">
                  More Pages
                </p>
                <ul className="space-y-3">
                  {["Services","Contact"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="font-medium hover:opacity-60 transition-opacity"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>

              <div>
                <p className="mb-4 font-semibold uppercase">
                  Utility Pages
                </p>
                <ul className="space-y-3">
                  {["Licenses", "404 Page"].map(
                    (item) => (
                      <li key={item}>
                        <Link
                          href="#"
                          className="font-medium hover:opacity-60 transition-opacity"
                        >
                          {item}
                        </Link>
                      </li>
                    ),
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t text-center lg:text-right border-neutral-200 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
          <p className="w-full">&copy; {new Date().getFullYear()} Prodigy. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
