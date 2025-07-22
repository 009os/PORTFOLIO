"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { GraduationCap, BookOpen, Award, ArrowRight, ChevronDown } from "lucide-react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      {/* Top Right Navigation - Fixed */}
      <nav className="fixed top-8 right-8 animate-fade-in z-50 bg-zinc-900/50 backdrop-blur-xl rounded-xl p-3 border border-zinc-700/30 transition-all duration-500">
        <ul className="flex items-center gap-6 font-sans">
          <li 
            className={`transition-all duration-500 ${
              scrollY > 100 ? 'opacity-0 -translate-y-4 pointer-events-none hidden' : 'opacity-100 translate-y-0'
            }`}
            style={{ display: scrollY > 100 ? 'none' : 'block' }}
          >
            <Link
              href="/education"
              className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
            >
              Education
            </Link>
          </li>
          <li 
            className={`transition-all duration-500 ${
              scrollY > 600 ? 'opacity-0 -translate-y-4 pointer-events-none hidden' : 'opacity-100 translate-y-0'
            }`}
            style={{ display: scrollY > 600 ? 'none' : 'block' }}
          >
            <Link
              href="/projects"
              className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              href="/introductions"
              className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
            >
              About Me
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
            >
              Socials
            </Link>
          </li>
        </ul>
      </nav>

      {/* Spacing to center name in middle of page */}
      <div className="my-32"></div>
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      <h1 className="z-10 text-white text-4xl sm:text-6xl md:text-9xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in font-display">
        Omji Shukla
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-16 text-center animate-fade-in">
        <h2 className="text-base text-zinc-300 font-sans">
          I'm building robust and scalable market-making systems at{" "}
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

      {/* Scroll Indicator */}
      <div className="flex justify-center mt-12 animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="flex flex-col items-center text-zinc-400 hover:text-zinc-300 transition-colors duration-300 cursor-pointer group">
          <span className="text-lg font-semibold mb-3 opacity-80 group-hover:opacity-100 transition-opacity">Scroll to explore education and projects</span>
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </div>

      {/* Education Preview */}
      <div 
        className={`w-full max-w-6xl mx-auto px-8 mt-32 transition-all duration-1000 ${
          scrollY > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-zinc-100 mb-4 font-display">
            Education
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Master's Degree */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                <GraduationCap className="w-6 h-6 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-zinc-100">Master's</h4>
            </div>
            <p className="text-base text-zinc-300 mb-2">MCA - AI/ML</p>
            <p className="text-sm text-zinc-400 mb-2">UPES Dehradun</p>
            <p className="text-sm text-zinc-500">CGPA: 9.0</p>
          </div>

          {/* Bachelor's Degree */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                <BookOpen className="w-6 h-6 text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-zinc-100">Bachelor's</h4>
            </div>
            <p className="text-base text-zinc-300 mb-2">BSc - Math & Physics</p>
            <p className="text-sm text-zinc-400 mb-2">Kanpur University</p>
            <p className="text-sm text-zinc-500">1st Division</p>
          </div>

          {/* Intermediate */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                <Award className="w-6 h-6 text-orange-400" />
              </div>
              <h4 className="text-lg font-bold text-zinc-100">Intermediate</h4>
            </div>
            <p className="text-base text-zinc-300 mb-2">PCM + Computer Science</p>
            <p className="text-sm text-zinc-400 mb-2">St. Francis Academy</p>
            <p className="text-sm text-zinc-500">80.8%</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/education"
            className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 font-medium"
          >
            View Full Education Details <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Projects Preview */}
      <div 
        className={`w-full max-w-6xl mx-auto px-8 mt-32 transition-all duration-1000 ${
          scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-12">
          <h3 className="text-4xl font-bold text-zinc-100 mb-4 font-display">
            Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Project 1 */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105">
            <h4 className="text-lg font-bold text-zinc-100 mb-2">Binance Multi-Leg Options</h4>
            <p className="text-base text-zinc-400 mb-3">Multi-leg options execution system</p>
            <p className="text-sm text-zinc-500">Featured Project</p>
          </div>

          {/* Project 2 */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105">
            <h4 className="text-lg font-bold text-zinc-100 mb-2">Funding Fee Arbitrage</h4>
            <p className="text-base text-zinc-400 mb-3">Crypto arbitrage trading system</p>
            <p className="text-sm text-zinc-500">Featured Project</p>
          </div>

          {/* Project 3 */}
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105">
            <h4 className="text-lg font-bold text-zinc-100 mb-2">Crypto Exchange Backend API</h4>
            <p className="text-base text-zinc-400 mb-3">Internal backend API system</p>
            <p className="text-sm text-zinc-500">Featured Project</p>
          </div>
        </div>

        <div className="text-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 font-medium"
          >
            View All Projects <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Final scroll indicator */}
      <div 
        className={`flex justify-center mt-8 transition-all duration-1000 ${
          scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="flex flex-col items-center text-zinc-400 hover:text-zinc-300 transition-colors duration-300 cursor-pointer group">
          <span className="text-lg font-semibold mb-3 opacity-80 group-hover:opacity-100 transition-opacity">You've reached the end</span>
          <div className="w-5 h-5 flex items-center justify-center">
            <div className="w-2 h-2 bg-zinc-400 rounded-full group-hover:bg-zinc-300 transition-colors"></div>
          </div>
        </div>
      </div>

      {/* Bottom spacing for scroll */}
      <div className="h-32"></div>
    </div>
  );
}
