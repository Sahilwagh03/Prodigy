"use client";

import {
  ArrowUpRight,
  Instagram,
  Linkedin,
} from "lucide-react";
import Link from "next/link";
import TalkButton from "../../../components/talk-button";
import Logo from "../../../components/logo";

export default function Footer() {
  return (
    <footer>
      <div className="max-w-7xl mx-auto px-4 md:px-10 pt-6 lg:pt-12 pb-5">
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          
          {/* LEFT */}
          <div className="flex flex-col justify-between gap-8 lg:gap-16">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                Have any project <br /> idea in your mind!
              </h2>

              <TalkButton
                label="Book a free strategy call"
                dotClassName="bg-[#f3350c]"
                className="bg-black text-white hover:bg-black"
              />
            </div>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 text-neutral-600">
              <Link
                href="https://instagram.com"
                target="_blank"
                aria-label="Instagram"
                className="hover:text-black transition-colors"
              >
                <Instagram size={18} />
              </Link>

              <Link
                href="https://linkedin.com"
                target="_blank"
                aria-label="LinkedIn"
                className="hover:text-black transition-colors"
              >
                <Linkedin size={18} />
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <div className="space-y-8">
            {/* EMAIL */}
            <Link
              href="mailto:prodigy-labs@gmail.com"
              className="text-[1.65rem] lg:text-[2.75rem] font-bold tracking-tight flex gap-2 items-center hover:opacity-70 transition-opacity leading-tight"
            >
              prodigy-labs@gmail.com
              <ArrowUpRight
                size={32}
                strokeWidth={1.5}
                className="mt-1 shrink-0"
              />
            </Link>

            {/* LINKS */}
            <div className="grid grid-cols-3 gap-6 text-sm">
              
              {/* MAIN */}
              <div>
                <p className="mb-4 font-semibold uppercase">Main Pages</p>
                <ul className="space-y-3">
                  <li><Link href="/">Home</Link></li>
                  <li><Link href="/about">About</Link></li>
                  <li><Link href="/projects">Projects</Link></li>
                </ul>
              </div>

              {/* MORE */}
              <div>
                <p className="mb-4 font-semibold uppercase">More Pages</p>
                <ul className="space-y-3">
                  <li><Link href="/services">Services</Link></li>
                  <li><Link href="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* UTILITY */}
              <div>
                <p className="mb-4 font-semibold uppercase">Utility Pages</p>
                <ul className="space-y-3">
                  <li><Link href="/licenses">Licenses</Link></li>
                  <li><Link href="/not-found">404 Page</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="border-t text-center lg:text-right border-neutral-200 pt-4 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-neutral-500">
          <Link href="/">
            <Logo className="text-black w-auto h-10" />
          </Link>

          <p className="w-full">
            &copy; {new Date().getFullYear()} Prodigy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}