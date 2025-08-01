"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Particles from "./components/particles";
import { Navigation } from "./components/nav";
import { GraduationCap, BookOpen, Award, ArrowRight, ChevronDown, Building2, Code, MapPin } from "lucide-react";

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
      <Navigation />

      {/* Spacing to center name in middle of page */}
      <div className="my-16 md:my-32"></div>
      
      <div className="hidden w-screen h-px animate-glow md:block animate-fade-left bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
      />
      
      <h1 className="z-10 text-white text-3xl sm:text-5xl md:text-7xl lg:text-9xl font-extrabold tracking-tight drop-shadow-lg animate-fade-in font-display px-4 text-center">
        Omji Shukla
      </h1>

      <div className="hidden w-screen h-px animate-glow md:block animate-fade-right bg-gradient-to-r from-zinc-300/0 via-zinc-300/50 to-zinc-300/0" />
      
      <div className="my-8 md:my-16 text-center animate-fade-in px-4">
        <h2 className="text-sm md:text-base text-zinc-300 font-sans">
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
        <div 
          className="flex flex-col items-center text-zinc-400 hover:text-zinc-300 transition-colors duration-300 cursor-pointer group"
          onClick={() => {
            const aboutSection = document.querySelector('[data-section="about"]');
            if (aboutSection) {
              aboutSection.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-lg font-semibold mb-3 opacity-80 group-hover:opacity-100 transition-opacity">Scroll to explore more</span>
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </div>
      </div>

      {/* About Me Preview */}
      <div 
        data-section="about"
        className={`w-full max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-32 transition-all duration-1000 ${
          scrollY > 100 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-4 font-display">
            About Me
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>
      
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 md:p-8 hover:border-zinc-600/50 transition-all duration-300">
            <div className="flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-6">
              {/* Profile Photo */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 md:w-32 md:h-32 rounded-full overflow-hidden border-4 border-zinc-700/50 shadow-lg">
                  <img 
                    src="/profile.png" 
                    alt="Omji Shukla" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Text Content */}
              <div className="flex-1 text-left">
                <p className="text-base md:text-lg text-zinc-300 leading-relaxed">
                  I'm a software engineer specializing in building robust and scalable market-making systems for crypto derivatives exchanges. 
                  With expertise in backend development, algorithmic trading, and high-frequency systems, I love solving complex technical challenges.
                </p>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">
                Backend Development
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">
                Algorithmic Trading
              </span>
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/introductions"
            className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 font-medium"
          >
            Learn More About Me <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Work Experience Preview */}
      <div 
        className={`w-full max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-32 transition-all duration-1000 ${
          scrollY > 300 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-4 font-display">
            Work Experience
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8 mb-8 max-w-4xl mx-auto">
          {/* Senior Technical Engineer */}
          <Link href="/work-experience" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                  <Building2 className="w-6 h-6 text-blue-400" />
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Senior Technical Engineer</h4>
              </div>
              <p className="text-base text-zinc-300 mb-2">Pi42 - Crypto Derivatives Exchange</p>
              <p className="text-sm text-zinc-400 mb-2">May 2025 - Present</p>
              <p className="text-sm text-zinc-500">Market-making systems</p>
            </div>
          </Link>

          {/* Technical Engineer */}
          <Link href="/work-experience" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                  <Code className="w-6 h-6 text-green-400" />
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Technical Engineer</h4>
              </div>
              <p className="text-base text-zinc-300 mb-2">Pi42 - Crypto Derivatives Exchange</p>
              <p className="text-sm text-zinc-400 mb-2">Jun 2024 - May 2025</p>
              <p className="text-sm text-zinc-500">Algorithmic trading systems</p>
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/work-experience"
            className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 font-medium"
          >
            View Full Work Experience <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Projects Preview */}
      <div 
        className={`w-full max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-32 transition-all duration-1000 ${
          scrollY > 500 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-4 font-display">
            Projects
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Project 1 */}
          <Link href="/projects" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
                  <div className="w-6 h-6 bg-blue-400 rounded"></div>
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Binance Multi-Leg Options Hedge Fund</h4>
              </div>
              <p className="text-base text-zinc-300 mb-2">2-way delta-neutral options hedging system</p>
              <p className="text-sm text-zinc-400 mb-2">1.5+ billion USDT monthly volume</p>
              <p className="text-sm text-zinc-500">Featured Project</p>
            </div>
          </Link>

          {/* Project 2 */}
          <Link href="/projects" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
                  <div className="w-6 h-6 bg-green-400 rounded"></div>
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Bybit Options Hedge Fund</h4>
              </div>
              <p className="text-base text-zinc-300 mb-2">2-way Delta neutral options vs futures</p>
              <p className="text-sm text-zinc-400 mb-2">800+ million USDT monthly volume</p>
              <p className="text-sm text-zinc-500">Featured Project</p>
            </div>
          </Link>

          {/* Project 3 */}
          <Link href="/projects" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30">
                  <div className="w-6 h-6 bg-orange-400 rounded"></div>
                </div>
                <h4 className="text-lg font-bold text-zinc-100">Internal Admin Panel Backend API</h4>
              </div>
              <p className="text-base text-zinc-300 mb-2">Multi-department admin panel system</p>
              <p className="text-sm text-zinc-400 mb-2">70% reduction in dev team workload</p>
              <p className="text-sm text-zinc-500">Featured Project</p>
            </div>
          </Link>
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

      {/* Education Preview */}
      <div 
        className={`w-full max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-32 transition-all duration-1000 ${
          scrollY > 700 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-4 font-display">
            Education
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Master's Degree */}
          <Link href="/education" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
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
          </Link>

          {/* Bachelor's Degree */}
          <Link href="/education" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
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
          </Link>

          {/* Intermediate */}
          <Link href="/education" className="block">
            <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 hover:border-zinc-600/50 transition-all duration-300 hover:scale-105 cursor-pointer">
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
          </Link>
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

      {/* Poetry Preview */}
      <div 
        className={`w-full max-w-6xl mx-auto px-4 md:px-8 mt-16 md:mt-32 transition-all duration-1000 ${
          scrollY > 900 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        <div className="text-center mb-8 md:mb-12">
          <h3 className="text-2xl md:text-4xl font-bold text-zinc-100 mb-4 font-display">
            Poetry
          </h3>
          <div className="w-24 h-1 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 mx-auto"></div>
        </div>
      
        <div className="max-w-4xl mx-auto">
          <Link href="/writing" className="block">
            <div className="bg-gradient-to-br from-zinc-900/30 via-zinc-800/20 to-zinc-900/30 backdrop-blur-sm border border-zinc-600/30 rounded-xl p-6 md:p-8 hover:border-zinc-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group">
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-gradient-to-br from-zinc-500/20 to-zinc-600/20 rounded-lg border border-zinc-500/30 group-hover:scale-110 transition-transform duration-300">
                  <BookOpen className="w-6 h-6 text-zinc-300" />
                </div>
                <div>
                  <h4 className="text-xl md:text-2xl font-bold text-zinc-100 mb-1 group-hover:text-zinc-200 transition-colors duration-300">
                    हुजरे की शाम
                  </h4>
                  <p className="text-zinc-400 font-medium">Huzre Ki Shaam</p>
                </div>
              </div>
              <p className="text-base md:text-lg text-zinc-300 leading-relaxed mb-4">
                A collection of Hindi and Urdu poetry exploring the journey of love from attraction to devotion. 
                Where code meets verse, and logic dances with emotion.
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4 text-sm text-zinc-400">
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-yellow-400 rounded-full"></span>
                    155+ Poems
                  </span>
                  <span className="flex items-center gap-1">
                    <span className="w-2 h-2 bg-red-400 rounded-full"></span>
                    Hindi & Urdu
                  </span>
                </div>
                <div className="text-zinc-400 group-hover:text-zinc-300 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </Link>
        </div>

        <div className="text-center mt-8">
          <Link
            href="/writing"
            className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 font-medium"
          >
            Read My Poetry Collection <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>

      {/* Bottom spacing for scroll */}
      <div className="h-32"></div>
    </div>
  );
}
