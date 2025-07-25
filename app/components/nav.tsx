"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);
	const pathname = usePathname();

	useEffect(() => {
		if (!ref.current) return;
		const observer = new IntersectionObserver(([entry]) =>
			setIntersecting(entry.isIntersecting),
		);

		observer.observe(ref.current);
		return () => observer.disconnect();
	}, []);

	return (
		<header ref={ref}>
			<div
				className={`fixed top-2 right-2 md:top-8 md:right-8 z-50 bg-zinc-900/80 backdrop-blur-xl rounded-lg md:rounded-xl p-1 md:p-3 border border-zinc-700/30 transition-all duration-500 ${
					isIntersecting
						? "opacity-100"
						: "opacity-100"
				}`}
			>
				<nav>
					<ul className="flex items-center gap-1 md:gap-6 font-sans flex-wrap">
						{pathname !== "/" && (
							<li>
								<Link
									href="/"
									className="text-xs md:text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-105 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg hover:bg-zinc-800/30 whitespace-nowrap"
								>
									Home
								</Link>
							</li>
						)}
						{pathname !== "/introductions" && (
							<li>
								<Link
									href="/introductions"
									className="text-xs md:text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-105 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg hover:bg-zinc-800/30 whitespace-nowrap"
								>
									About Me
								</Link>
							</li>
						)}
						{pathname !== "/work-experience" && (
							<li>
								<Link
									href="/work-experience"
									className="text-xs md:text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-105 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg hover:bg-zinc-800/30 whitespace-nowrap"
								>
									Experience
								</Link>
							</li>
						)}
						{pathname !== "/projects" && (
							<li>
								<Link
									href="/projects"
									className="text-xs md:text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-105 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg hover:bg-zinc-800/30 whitespace-nowrap"
								>
									Projects
								</Link>
							</li>
						)}
						{pathname !== "/education" && (
							<li>
								<Link
									href="/education"
									className="text-xs md:text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-105 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg hover:bg-zinc-800/30 whitespace-nowrap"
								>
									Education
								</Link>
							</li>
						)}
						{pathname !== "/contact" && (
							<li>
								<Link
									href="/contact"
									className="text-xs md:text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-105 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-1 md:px-4 py-1 md:py-2 rounded-md md:rounded-lg hover:bg-zinc-800/30 whitespace-nowrap"
								>
									Socials
								</Link>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header>
	);
};
