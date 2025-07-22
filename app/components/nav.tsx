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
				className={`fixed top-8 right-8 z-50 bg-zinc-900/50 backdrop-blur-xl rounded-xl p-3 border border-zinc-700/30 transition-all duration-500 ${
					isIntersecting
						? "opacity-100"
						: "opacity-100"
				}`}
			>
				<nav>
					<ul className="flex items-center gap-6 font-sans">
						{pathname !== "/" && (
							<li>
								<Link
									href="/"
									className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
								>
									Home
								</Link>
							</li>
						)}
						{pathname !== "/projects" && (
							<li>
								<Link
									href="/projects"
									className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
								>
									Projects
								</Link>
							</li>
						)}
						{pathname !== "/education" && (
							<li>
								<Link
									href="/education"
									className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
								>
									Education
								</Link>
							</li>
						)}
						{pathname !== "/introductions" && (
							<li>
								<Link
									href="/introductions"
									className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
								>
									About Me
								</Link>
							</li>
						)}
						{pathname !== "/contact" && (
							<li>
								<Link
									href="/contact"
									className="text-lg font-bold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-4 py-2 rounded-lg hover:bg-zinc-800/30"
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
