"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";

export default function Introductions() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="max-w-4xl mx-auto mt-56 sm:mt-20">
					<div className="text-center mb-12">
						<div className="flex justify-center mb-8">
							<div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-zinc-600 shadow-2xl">
								<Image
									src="/profile.png"
									alt="Omji Shukla"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
						<h1 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6 font-display">
							About Me
						</h1>
						<div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
					</div>
					
					<div className="mt-4 text-zinc-400 leading-8 font-sans">
						<p className="mb-6 text-lg">
							I am a passionate engineer with a strong foundation in backend development. While I stay engaged in the evolving landscape of software development, I also focus on refining crypto trading strategies through automation.
						</p>
						
						<p className="mb-6 text-lg">
							Traveling is another passion of mine, as each new destination adds a unique chapter to my life's narrative. Music is a constant companion, providing a harmonious soundtrack to my journey.
						</p>
						
						<p className="mb-6 text-lg">
							As an avid cricket fan, I am inspired by Virat Kohli's dedication and skill. In my quieter moments, I find solace in the art of Urdu poetry, particularly in writing and reading Nazms and Ghazals.
						</p>
						
						<p className="mb-6 text-lg">
							Committed to growth and eager to contribute to innovative projects and collaborative teams. Let's connect and explore possibilities together!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
} 