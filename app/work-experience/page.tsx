"use client";
import Link from "next/link";
import React from "react";
import { Navigation } from "../components/nav";
import { Calendar, MapPin, Code, Zap, TrendingUp, Database, Building2 } from "lucide-react";

export default function WorkExperience() {
  return (
    <div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
      <Navigation />



      <div className="w-full max-w-4xl mx-auto px-8 py-16">
        {/* Header */}
        <div className="text-center mb-16 mt-28">
          <h1 className="text-5xl font-bold text-zinc-100 mb-6 font-display">
            Work Experience
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
        </div>

        {/* Pi42 Experience */}
        <div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-8 mb-8 hover:border-zinc-600/50 transition-all duration-300">
          {/* Company Header */}
          <div className="flex items-start gap-6 mb-6">
            {/* Pi42 Logo */}
            <div className="flex-shrink-0">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-xl border border-blue-500/30 flex items-center justify-center">
                <Building2 className="w-8 h-8 text-blue-400" />
              </div>
            </div>
            
            <div className="flex-1">
              <h2 className="text-2xl font-bold text-zinc-100 mb-2">Pi42</h2>
              <div className="flex items-center gap-4 text-zinc-400 mb-2">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  <span>Bengaluru, Karnataka, India</span>
                </div>
              </div>
              <div className="text-sm text-zinc-500">Full-time · On-site</div>
            </div>
          </div>

          {/* Senior Technical Engineer */}
          <div className="mb-6 pl-22">
            <h3 className="text-xl font-bold text-zinc-100 mb-2">Senior Technical Engineer</h3>
            <div className="text-sm text-zinc-400 mb-3">May 2025 - Present · 3 mos</div>
            <p className="text-zinc-300 mb-4">
              Leading the development of robust and scalable market-making systems for a crypto derivatives exchange. 
              Building high-performance trading infrastructure that handles millions of dollars in daily volume.
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 flex items-center gap-1">
                <Code className="w-3 h-3" />
                NestJS
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 flex items-center gap-1">
                <Database className="w-3 h-3" />
                Back-End Web Development
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                High-Frequency Trading
              </span>
            </div>
          </div>

          {/* Technical Engineer */}
          <div className="pl-22">
            <h3 className="text-xl font-bold text-zinc-100 mb-2">Technical Engineer</h3>
            <div className="text-sm text-zinc-400 mb-3">Jun 2024 - May 2025 · 1 yr</div>
            <p className="text-zinc-300 mb-4">
              Developed algorithmic trading systems and automation solutions for crypto derivatives trading. 
              Built and maintained critical infrastructure for real-time market data processing and trade execution.
            </p>
            
            {/* Skills */}
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30 flex items-center gap-1">
                <TrendingUp className="w-3 h-3" />
                Algorithmic Trading
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 rounded-full text-sm border border-red-500/30 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                Automation
              </span>
              <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30 flex items-center gap-1">
                <Code className="w-3 h-3" />
                NestJS
              </span>
              <span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30 flex items-center gap-1">
                <Database className="w-3 h-3" />
                Database Design
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30 flex items-center gap-1">
                <Zap className="w-3 h-3" />
                WebSocket APIs
              </span>
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="text-center">
          <p className="text-zinc-400 mb-4">
            Building the future of crypto derivatives trading with cutting-edge technology and innovative solutions.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 text-base text-zinc-400 hover:text-zinc-300 transition-colors duration-200 underline underline-offset-4 font-medium"
          >
            Get in touch to learn more about my work
          </Link>
        </div>
      </div>
    </div>
  );
} 