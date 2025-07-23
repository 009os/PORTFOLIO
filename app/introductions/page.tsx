"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";
import { Code, Globe, Music, BookOpen, Heart, Zap, Star, MapPin, Coffee, Target } from "lucide-react";

export default function Introductions() {
	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black relative overflow-x-hidden">
			<Navigation />
			
			{/* Animated Background Elements */}
			<div className="absolute inset-0 overflow-hidden pointer-events-none">
				<div className="absolute top-20 left-10 w-2 h-2 bg-blue-400 rounded-full animate-pulse opacity-60"></div>
				<div className="absolute top-40 right-20 w-1 h-1 bg-green-400 rounded-full animate-ping opacity-40"></div>
				<div className="absolute bottom-32 left-20 w-3 h-3 bg-purple-400 rounded-full animate-bounce opacity-50"></div>
				<div className="absolute bottom-20 right-10 w-1 h-1 bg-orange-400 rounded-full animate-pulse opacity-70"></div>
			</div>

			<div className="w-full max-w-6xl mx-auto px-4 md:px-8 py-16 mt-16">
				{/* Hero Section */}
				<div className="text-center mb-12 animate-fade-in">
					<div className="flex justify-center mb-8">
						<div className="relative group">
							<div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-full blur-xl opacity-30 group-hover:opacity-50 transition-opacity duration-500"></div>
							<div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-zinc-700/50 shadow-2xl group-hover:border-zinc-500/70 transition-all duration-500 group-hover:scale-105">
								<Image
									src="/profile.png"
									alt="Omji Shukla"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
					</div>
					<h1 className="text-3xl md:text-5xl font-bold tracking-tight text-zinc-100 mb-4 font-display animate-slide-up">
						About Me
					</h1>
					<div className="w-32 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 mx-auto mb-8 animate-slide-in"></div>
				</div>

				{/* Main Content Grid */}
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
					{/* Professional Section */}
					<div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 md:p-8 hover:border-zinc-600/50 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.1s' }}>
						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
								<Code className="w-6 h-6 text-blue-400" />
							</div>
							<h2 className="text-2xl font-bold text-zinc-100">Professional Journey</h2>
						</div>
						<p className="text-zinc-300 leading-relaxed mb-4">
							I am a passionate engineer with a strong foundation in backend development. While I stay engaged in the evolving landscape of software development, I also focus on refining crypto trading strategies through automation.
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm border border-blue-500/30">Backend Development</span>
							<span className="px-3 py-1 bg-green-500/20 text-green-400 rounded-full text-sm border border-green-500/30">Algorithmic Trading</span>
						</div>
					</div>

					{/* Personal Interests */}
					<div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 md:p-8 hover:border-zinc-600/50 transition-all duration-500 hover:scale-[1.02] animate-slide-up" style={{ animationDelay: '0.2s' }}>
						<div className="flex items-center gap-3 mb-6">
							<div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30">
								<Heart className="w-6 h-6 text-green-400" />
							</div>
							<h2 className="text-2xl font-bold text-zinc-100">Personal Interests</h2>
						</div>
						<p className="text-zinc-300 leading-relaxed mb-4">
							Traveling is another passion of mine, as each new destination adds a unique chapter to my life's narrative. Music is a constant companion, providing a harmonious soundtrack to my journey.
						</p>
						<div className="flex flex-wrap gap-2">
							<span className="px-3 py-1 bg-orange-500/20 text-orange-400 rounded-full text-sm border border-orange-500/30">Travel</span>
							<span className="px-3 py-1 bg-pink-500/20 text-pink-400 rounded-full text-sm border border-pink-500/30">Music</span>
							<span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm border border-yellow-500/30">Cricket</span>
							<span className="px-3 py-1 bg-purple-500/20 text-purple-400 rounded-full text-sm border border-purple-500/30">Poetry</span>
						</div>
					</div>
				</div>

				{/* Detailed Sections */}
				<div className="space-y-6">
					{/* Cricket & Inspiration */}
					<div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 md:p-8 hover:border-zinc-600/50 transition-all duration-500 hover:scale-[1.01] animate-slide-up" style={{ animationDelay: '0.3s' }}>
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 bg-gradient-to-br from-yellow-500/20 to-orange-500/20 rounded-lg border border-yellow-500/30">
								<Target className="w-5 h-5 text-yellow-400" />
							</div>
							<h3 className="text-xl font-bold text-zinc-100">Cricket & Inspiration</h3>
						</div>
						<p className="text-zinc-300 leading-relaxed">
							As an avid cricket fan, I am inspired by Virat Kohli's dedication and skill. His relentless pursuit of excellence and ability to perform under pressure resonates with my approach to problem-solving and continuous improvement.
						</p>
					</div>

					{/* Poetry & Literature */}
					<div className="bg-zinc-900/30 backdrop-blur-sm border border-zinc-700/30 rounded-xl p-6 md:p-8 hover:border-zinc-600/50 transition-all duration-500 hover:scale-[1.01] animate-slide-up" style={{ animationDelay: '0.4s' }}>
						<div className="flex items-center gap-3 mb-4">
							<div className="p-2 bg-gradient-to-br from-purple-500/20 to-pink-500/20 rounded-lg border border-purple-500/30">
								<BookOpen className="w-5 h-5 text-purple-400" />
							</div>
							<h3 className="text-xl font-bold text-zinc-100">Poetry & Literature</h3>
						</div>
						<p className="text-zinc-300 leading-relaxed">
							In my quieter moments, I find solace in the art of Urdu poetry, particularly in writing and reading Nazms and Ghazals. The rhythm and depth of these poetic forms provide a beautiful contrast to the logical world of coding.
						</p>
					</div>

					{/* Call to Action */}
					<div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-blue-500/30 rounded-xl p-6 md:p-8 text-center animate-slide-up" style={{ animationDelay: '0.5s' }}>
						<div className="flex justify-center mb-4">
							<div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30">
								<Zap className="w-6 h-6 text-blue-400" />
							</div>
						</div>
						<h3 className="text-xl font-bold text-zinc-100 mb-3">Let's Connect!</h3>
						<p className="text-zinc-300 leading-relaxed mb-6">
							Committed to growth and eager to contribute to innovative projects and collaborative teams. Let's connect and explore possibilities together!
						</p>
						<div className="flex flex-wrap justify-center gap-4">
							<a href="https://x.com/009omji" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30 hover:bg-blue-500/30 hover:text-blue-300 transition-all duration-300">
								Twitter
							</a>
							<a href="https://github.com/009os" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-gray-500/20 text-gray-400 rounded-lg border border-gray-500/30 hover:bg-gray-500/30 hover:text-gray-300 transition-all duration-300">
								GitHub
							</a>
							<a href="https://www.linkedin.com/in/009os/" target="_blank" rel="noopener noreferrer" className="px-4 py-2 bg-blue-600/20 text-blue-500 rounded-lg border border-blue-600/30 hover:bg-blue-600/30 hover:text-blue-400 transition-all duration-300">
								LinkedIn
							</a>
							<a href="mailto:omshukla245@gmail.com" className="px-4 py-2 bg-red-500/20 text-red-400 rounded-lg border border-red-500/30 hover:bg-red-500/30 hover:text-red-300 transition-all duration-300">
								Email
							</a>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
} 