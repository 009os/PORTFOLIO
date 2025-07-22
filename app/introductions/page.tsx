"use client";
import { Navigation } from "../components/nav";
import Image from "next/image";

export default function Introductions() {
	return (
		<div className="bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0 h-screen overflow-hidden">
			<Navigation />
			<div className="container flex items-center justify-center h-screen px-4 mx-auto">
				<div className="max-w-4xl mx-auto mt-20 sm:mt-10">
					<div className="text-center mb-8">
						<div className="flex justify-center mb-6">
							<div className="relative w-40 h-40 md:w-52 md:h-52 rounded-full overflow-hidden border-4 border-zinc-600 shadow-2xl">
								<Image
									src="/profile.png"
									alt="Omji Shukla"
									fill
									className="object-cover"
									priority
								/>
							</div>
						</div>
						<h1 className="text-2xl font-bold tracking-tight text-zinc-100 sm:text-3xl mb-4 font-display">
							About Me
						</h1>
						<div className="w-20 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto"></div>
					</div>
					
					<div className="mt-2 text-zinc-400 leading-7 font-sans">
						<p className="mb-4 text-base">
							I am a passionate engineer with a strong foundation in backend development. While I stay engaged in the evolving landscape of software development, I also focus on refining crypto trading strategies through automation.
						</p>
						
						<p className="mb-4 text-base">
							Traveling is another passion of mine, as each new destination adds a unique chapter to my life's narrative. Music is a constant companion, providing a harmonious soundtrack to my journey.
						</p>
						
						<p className="mb-4 text-base">
							As an avid cricket fan, I am inspired by Virat Kohli's dedication and skill. In my quieter moments, I find solace in the art of Urdu poetry, particularly in writing and reading Nazms and Ghazals.
						</p>
						
						<p className="mb-4 text-base">
							Committed to growth and eager to contribute to innovative projects and collaborative teams. Let's connect and explore possibilities together!
						</p>
					</div>
				</div>
			</div>
		</div>
	);
} 