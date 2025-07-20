import Link from "next/link";
import React from "react";
import Particles from "./components/particles";

import { Sora } from "next/font/google";

const sora = Sora({
  subsets: ["latin"],
  weight: ["700"],
});

const navigation = [
  { name: "Projects", href: "/projects" },
  { name: "Socials", href: "/contact" },
];

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-screen h-screen overflow-hidden bg-gradient-to-tl from-black via-zinc-600/20 to-black">
      <nav className="my-16 animate-fade-in">
        <ul
          className={`flex items-center justify-center gap-4 ${sora.className}`}
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold duration-500 text-zinc-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      <h1
        className={`z-10 text-white text-4xl sm:text-6xl md:text-9xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in ${sora.className}`}
      >
        Omji Shukla
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      <div className="my-16 text-center animate-fade-in">
        <h2 className={`text-sm text-zinc-300 ${sora.className}`}>
          I’m building robust and scalable market-making systems at{" "}
          <Link
            target="_blank"
            href="https://pi42.com"
            className="text-zinc-500 italic font-semibold underline underline-offset-4 hover:text-zinc-300 transition-colors"
          >
            Pi42
          </Link>{" "}
          , a crypto derivatives exchange.
        </h2>
      </div>
    </div>
  );
}
