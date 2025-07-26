"use client";
import { Navigation } from "../components/nav";
import { BookOpen, Heart, Star, Quote, ExternalLink, PenTool } from "lucide-react";
import Link from "next/link";

export default function Writing() {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black relative overflow-x-hidden">
			<Navigation />
			
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-2 h-2 bg-zinc-400 rounded-full animate-pulse opacity-60"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-zinc-300 rounded-full animate-ping opacity-40"></div>
				<div className="absolute bottom-32 left-20 w-3 h-3 bg-zinc-500 rounded-full animate-bounce opacity-50"></div>
				<div className="absolute bottom-20 right-10 w-1 h-1 bg-zinc-400 rounded-full animate-pulse opacity-70"></div>
			</div>



			<div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 mt-20 md:mt-16">
				{/* Hero Section */}
				<div className="text-center mb-8 md:mb-12 animate-fade-in">
					<div className="flex justify-center mb-4 md:mb-6">
						<div className="p-3 md:p-4 bg-gradient-to-br from-zinc-500/20 to-zinc-600/20 rounded-full border border-zinc-500/30">
							<PenTool className="w-6 h-6 md:w-8 md:h-8 text-zinc-300" />
						</div>
					</div>
					<h1 className="text-2xl md:text-3xl lg:text-5xl font-bold tracking-tight text-zinc-100 mb-3 md:mb-4 font-display animate-slide-up">
						Poetry
					</h1>
					<div className="w-24 md:w-32 h-1 bg-gradient-to-r from-zinc-500 via-zinc-400 to-zinc-600 mx-auto mb-4 md:mb-6 animate-slide-in"></div>
					<p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto animate-slide-up px-2" style={{ animationDelay: '0.2s' }}>
						Where code meets poetry, and logic dances with emotion
					</p>
				</div>

				{/* Poetry Collection Card */}
				<div className="mb-6 md:mb-8 animate-slide-up" style={{ animationDelay: '0.3s' }}>
					<div className="bg-gradient-to-br from-zinc-900/30 via-zinc-800/20 to-zinc-900/30 backdrop-blur-sm border border-zinc-600/30 rounded-xl p-4 md:p-6 lg:p-8 hover:border-zinc-500/50 transition-all duration-500 hover:scale-[1.02] group">
						{/* Header */}
						<div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4 md:mb-6 gap-3">
							<div className="flex items-center gap-3 md:gap-4">
								<div className="p-2 md:p-3 bg-gradient-to-br from-zinc-500/20 to-zinc-600/20 rounded-lg border border-zinc-500/30 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
									<BookOpen className="w-5 h-5 md:w-6 md:h-6 text-zinc-300" />
								</div>
								<div className="flex-1 min-w-0">
									<h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-zinc-100 mb-1 group-hover:text-zinc-200 transition-colors duration-300">
										हुजरे की शाम
									</h2>
									<p className="text-zinc-400 font-medium text-sm md:text-base">Huzre Ki Shaam</p>
								</div>
							</div>
							<div className="text-zinc-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
								<ExternalLink className="w-6 h-6" />
							</div>
						</div>

						{/* Introduction */}
						<div className="mb-4 md:mb-6">
							<div className="flex items-start gap-2 md:gap-3 mb-3 md:mb-4">
								<Quote className="w-4 h-4 md:w-5 md:h-5 text-zinc-400 mt-1 flex-shrink-0" />
								<p className="text-zinc-300 leading-relaxed text-sm md:text-base lg:text-lg">
									Step into the twilight of emotions where Hindi and Urdu poetry intertwine like old friends sharing secrets. This collection is my sanctuary—a place where the structured world of coding meets the fluid beauty of verse, where every line carries the weight of unspoken feelings and every stanza echoes with the rhythm of a heart that beats in both logic and love.
								</p>
							</div>
							<p className="text-zinc-400 leading-relaxed text-xs md:text-sm lg:text-base">
								From the gentle whispers of Nazms to the profound depths of Ghazals, each piece is a bridge between the analytical mind and the poetic soul. Here, you'll find verses that speak of longing, love, introspection, and the beautiful chaos of human emotions—all penned in moments when the heart overflows and words become the only refuge.
							</p>
						</div>

						{/* Features */}
						<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 md:gap-4 mb-4 md:mb-6">
							<div className="flex items-center gap-2 text-xs md:text-sm">
								<Star className="w-3 h-3 md:w-4 md:h-4 text-yellow-400" />
								<span className="text-zinc-300">155+ Poems</span>
							</div>
							<div className="flex items-center gap-2 text-xs md:text-sm">
								<Heart className="w-3 h-3 md:w-4 md:h-4 text-red-400" />
								<span className="text-zinc-300">Hindi & Urdu</span>
							</div>
							<div className="flex items-center gap-2 text-xs md:text-sm">
								<BookOpen className="w-3 h-3 md:w-4 md:h-4 text-blue-400" />
								<span className="text-zinc-300">Ongoing Collection</span>
							</div>
						</div>

						{/* Call to Action */}
						<a 
							href="https://www.wattpad.com/story/219756922-%E0%A4%B9%E0%A5%81%E0%A4%9C%E0%A4%B0%E0%A5%87-%E0%A4%95%E0%A5%80-%E0%A4%B6%E0%A4%BE%E0%A4%AE" 
							target="_blank" 
							rel="noopener noreferrer"
							className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-zinc-500/20 to-zinc-600/20 text-zinc-300 rounded-lg border border-zinc-500/30 hover:bg-zinc-500/30 hover:text-zinc-200 transition-all duration-300 group-hover:scale-105 text-sm md:text-base"
						>
							<span>Read the Collection</span>
							<ExternalLink className="w-3 h-3 md:w-4 md:h-4" />
						</a>
					</div>
				</div>

				{/* Additional Info */}
				<div className="text-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
					<div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-4 md:p-6">
						<h3 className="text-lg md:text-xl font-bold text-zinc-100 mb-2 md:mb-3">Why Poetry?</h3>
						<p className="text-zinc-400 leading-relaxed mb-3 md:mb-4 text-sm md:text-base">
							In the world of algorithms and code, poetry serves as my creative compass—a reminder that beauty exists in both precision and passion. Each verse is a moment captured, a feeling preserved, and an invitation to see the world through the lens of emotion.
						</p>
						<div className="flex flex-wrap justify-center gap-1 md:gap-2">
							<span className="px-2 md:px-3 py-1 bg-zinc-500/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-500/30">dilkashi</span>
							<span className="px-2 md:px-3 py-1 bg-zinc-600/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-600/30">uns</span>
							<span className="px-2 md:px-3 py-1 bg-zinc-500/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-500/30">ishq</span>
							<span className="px-2 md:px-3 py-1 bg-zinc-600/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-600/30">akidat</span>
							<span className="px-2 md:px-3 py-1 bg-zinc-500/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-500/30">ibadat</span>
							<span className="px-2 md:px-3 py-1 bg-zinc-600/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-600/30">junoon</span>
							<span className="px-2 md:px-3 py-1 bg-zinc-500/20 text-zinc-300 rounded-full text-xs md:text-sm border border-zinc-500/30">maut</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 