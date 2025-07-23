"use client";
import { Navigation } from "../components/nav";
import { GraduationCap, BookOpen, Award } from "lucide-react";

export default function Education() {

	return (
		<div className="flex flex-col items-center justify-center w-screen min-h-screen bg-gradient-to-tl from-black via-zinc-600/20 to-black relative">
			<Navigation />
			<div className="w-full max-w-4xl mx-auto px-4 md:px-8 py-16 mt-16">
				<div className="text-center mb-8 md:mb-12">
					<h1 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-100 mb-4 md:mb-6 font-display animate-fade-in">
						Education
					</h1>
					<div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto animate-slide-in"></div>
				</div>
				
				<div className="space-y-6 md:space-y-8">
						{/* Master's Degree Section */}
						<div 
							className="group bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-zinc-600/70 hover:shadow-2xl hover:shadow-zinc-500/10 transition-all duration-500 transform hover:scale-[1.02] animate-slide-up"
							style={{ animationDelay: '0.1s' }}
						>
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center gap-4">
									<div className="p-3 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-lg border border-blue-500/30 group-hover:scale-110 transition-transform duration-300">
										<GraduationCap className="w-6 h-6 text-blue-400" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-blue-300 transition-colors duration-300">
											Master's Degree
										</h2>
										<h3 className="text-xl text-zinc-300 mb-1">
											Master in Computer Application
										</h3>
										<p className="text-zinc-400 mb-1">
											Specialization in Artificial Intelligence and Machine Learning
										</p>
										<p className="text-zinc-400 mb-2">
											UPES Dehradun
										</p>
										<p className="text-zinc-500 text-sm">
											2022 - 2024
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="text-2xl font-bold text-zinc-100 group-hover:text-blue-300 transition-colors duration-300">
										CGPA: 9.0
									</div>

								</div>
							</div>
							<div className="pt-4 border-t border-zinc-700/50">
								<h4 className="text-lg font-semibold text-zinc-200 mb-3 flex items-center gap-2">
									<Award className="w-5 h-5 text-yellow-400" />
									Key Highlights:
								</h4>
								<ul className="text-zinc-400 space-y-3">
									<li className="flex items-start group/item">
										<span className="text-blue-400 mr-3 mt-1 group-hover/item:scale-125 transition-transform duration-200">•</span>
										<span className="group-hover/item:text-zinc-300 transition-colors duration-200">Won Dean's Award for Academic Excellence</span>
									</li>
								</ul>
							</div>
						</div>

						{/* Bachelor's Degree Section */}
						<div 
							className="group bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-zinc-600/70 hover:shadow-2xl hover:shadow-zinc-500/10 transition-all duration-500 transform hover:scale-[1.02] animate-slide-up"
							style={{ animationDelay: '0.2s' }}
						>
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center gap-4">
									<div className="p-3 bg-gradient-to-br from-green-500/20 to-emerald-500/20 rounded-lg border border-green-500/30 group-hover:scale-110 transition-transform duration-300">
										<BookOpen className="w-6 h-6 text-green-400" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-green-300 transition-colors duration-300">
											Bachelor's Degree
										</h2>
										<h3 className="text-xl text-zinc-300 mb-1">
											Bachelor of Science
										</h3>
										<p className="text-zinc-400 mb-1">
											Mathematics and Physics
										</p>
										<p className="text-zinc-400 mb-2">
											Kanpur University
										</p>
										<p className="text-zinc-500 text-sm">
											2018 - 2021
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="text-2xl font-bold text-zinc-100 group-hover:text-green-300 transition-colors duration-300">
										Division: 1st
									</div>

								</div>
							</div>

						</div>

						{/* Intermediate Section */}
						<div 
							className="group bg-gradient-to-br from-zinc-900/80 to-zinc-800/40 backdrop-blur-sm border border-zinc-700/50 rounded-xl p-6 hover:border-zinc-600/70 hover:shadow-2xl hover:shadow-zinc-500/10 transition-all duration-500 transform hover:scale-[1.02] animate-slide-up"
							style={{ animationDelay: '0.3s' }}
						>
							<div className="flex items-start justify-between mb-4">
								<div className="flex items-center gap-4">
									<div className="p-3 bg-gradient-to-br from-orange-500/20 to-red-500/20 rounded-lg border border-orange-500/30 group-hover:scale-110 transition-transform duration-300">
										<Award className="w-6 h-6 text-orange-400" />
									</div>
									<div>
										<h2 className="text-2xl font-bold text-zinc-100 mb-2 group-hover:text-orange-300 transition-colors duration-300">
											Intermediate
										</h2>
										<h3 className="text-xl text-zinc-300 mb-1">
											PCM + Computer Science
										</h3>
										<p className="text-zinc-400 mb-2">
											St. Francis Academy
										</p>
										<p className="text-zinc-500 text-sm">
											2016 - 2017
										</p>
									</div>
								</div>
								<div className="text-right">
									<div className="text-2xl font-bold text-zinc-100 group-hover:text-orange-300 transition-colors duration-300">
										Percentage: 80.8%
									</div>

								</div>
							</div>

						</div>
					</div>
			</div>
		</div>
	);
} 