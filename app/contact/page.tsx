"use client";
import { Github, Linkedin, Mail, Twitter,Instagram,PenSquare, MessageCircle } from "lucide-react";
import Link from "next/link";
import { Navigation } from "../components/nav";
import { Card } from "../components/card";

const socials = [
	{
		icon: <Twitter size={20} />,
		href: "https://x.com/009omji",
		label: "Twitter",
		handle: "@009omji",
		description: "Follow for tech insights and crypto trading updates",
		color: "from-blue-500/20 to-cyan-500/20",
		borderColor: "border-blue-500/30",
		iconColor: "text-blue-400",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:omshukla245@gmail.com",
		label: "Email",
		handle: "omshukla245@gmail.com",
		description: "Let's discuss opportunities and collaborations",
		color: "from-red-500/20 to-pink-500/20",
		borderColor: "border-red-500/30",
		iconColor: "text-red-400",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/009os",
		label: "Github",
		handle: "@009os",
		description: "Check out my open-source projects and contributions",
		color: "from-gray-500/20 to-slate-500/20",
		borderColor: "border-gray-500/30",
		iconColor: "text-gray-400",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/009os/",
		label: "Linkedin",
		handle: "Omji Shukla",
		description: "Connect professionally and explore career opportunities",
		color: "from-blue-600/20 to-indigo-500/20",
		borderColor: "border-blue-600/30",
		iconColor: "text-blue-500",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/009os/",
		label: "Instagram",
		handle: "@009os",
		description: "Behind-the-scenes of my tech journey and life",
		color: "from-purple-500/20 to-pink-500/20",
		borderColor: "border-purple-500/30",
		iconColor: "text-purple-400",
	},
	{
		icon: <PenSquare size={20} />,
		href: "https://medium.com/@omjishukla",
		label: "Medium",
		handle: "@omjishukla",
		description: "Read my technical articles and industry insights",
		color: "from-green-500/20 to-emerald-500/20",
		borderColor: "border-green-500/30",
		iconColor: "text-green-400",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
					<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
			<div className="w-full max-w-6xl">
				<div className="text-center mb-8 md:mb-12 mt-20 md:mt-24">
					<h2 className="text-2xl md:text-4xl font-bold tracking-tight text-zinc-100 sm:text-5xl mb-4 md:mb-6 font-display animate-fade-in">
						Let's Connect
					</h2>
											<div className="w-24 h-1 bg-gradient-to-r from-zinc-500 to-zinc-300 mx-auto mb-4 md:mb-6"></div>
					<p className="text-base md:text-lg text-zinc-400 font-sans max-w-2xl mx-auto px-4">
							Ready to collaborate, discuss opportunities, or just chat about tech? 
							I'm always excited to connect with fellow developers, entrepreneurs, and tech enthusiasts.
						</p>
					</div>
					<div className="grid w-full grid-cols-1 gap-4 md:gap-6 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:gap-8 px-4">
					{socials.map((s, index) => (
						<div key={s.label} className="animate-slide-up h-full" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
							<Card className="h-full">
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-3 duration-700 group hover:scale-105 transition-all h-full justify-center"
								>
								<div className={`relative z-10 flex items-center justify-center w-12 h-12 text-lg duration-1000 border-2 rounded-full ${s.iconColor} group-hover:text-white bg-gradient-to-br ${s.color} ${s.borderColor} group-hover:border-zinc-200 group-hover:bg-zinc-900 drop-shadow-lg group-hover:drop-shadow-xl transition-all`}>
									{s.icon}
								</div>
								<div className="z-10 flex flex-col items-center text-center">
									<span className="text-base font-bold duration-150 text-zinc-200 group-hover:text-white font-display">
										{s.handle}
									</span>
									<span className="text-xs font-medium text-center duration-1000 text-zinc-400 group-hover:text-zinc-200 mb-1">
										{s.label}
									</span>
									<p className="text-xs text-center text-zinc-500 group-hover:text-zinc-400 leading-relaxed">
										{s.description}
									</p>
								</div>
							</Link>
						</Card>
						</div>
					))}
					</div>
				</div>
			</div>
		</div>
	);
}
