"use client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";

export const Navigation: React.FC = () => {
	const ref = useRef<HTMLElement>(null);
	const [isIntersecting, setIntersecting] = useState(true);

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
				className={`fixed inset-x-0 top-0 z-50 backdrop-blur-sm duration-200 border-b  ${
					isIntersecting
						? "bg-zinc-900/0 border-transparent"
						: "bg-zinc-900/300  border-zinc-800 "
				}`}
			>
				<div className="container flex flex-row-reverse items-center justify-between p-3 mx-auto">
					<div className="flex justify-between gap-6">
						<Link
							href="/"
							className="text-sm font-semibold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-3 py-1 rounded-lg hover:bg-zinc-800/30 backdrop-blur-sm"
						>
							Home
						</Link>
						<Link
							href="/introductions"
							className="text-sm font-semibold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-3 py-1 rounded-lg hover:bg-zinc-800/30 backdrop-blur-sm"
						>
							About Me
						</Link>
						<Link
							href="/education"
							className="text-sm font-semibold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-3 py-1 rounded-lg hover:bg-zinc-800/30 backdrop-blur-sm"
						>
							Education
						</Link>
						<Link
							href="/projects"
							className="text-sm font-semibold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-3 py-1 rounded-lg hover:bg-zinc-800/30 backdrop-blur-sm"
						>
							Projects
						</Link>
						<Link
							href="/contact"
							className="text-sm font-semibold duration-500 text-zinc-400 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 px-3 py-1 rounded-lg hover:bg-zinc-800/30 backdrop-blur-sm"
						>
							Socials
						</Link>
					</div>

					<Link
						href="/"
						className="duration-500 text-zinc-300 hover:text-zinc-100 hover:scale-110 transition-all transform hover:shadow-lg hover:shadow-zinc-500/20 p-2 rounded-lg hover:bg-zinc-800/30 backdrop-blur-sm"
					>
						<ArrowLeft className="w-6 h-6" />
					</Link>
				</div>
			</div>
		</header>
	);
};
