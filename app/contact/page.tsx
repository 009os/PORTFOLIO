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
		// handle: "Omji Shukla",
	},
	{
		icon: <Mail size={20} />,
		href: "mailto:omshukla245@gmail.com",
		label: "Email",
		// handle: "Omji Shukla",
	},
	{
		icon: <Github size={20} />,
		href: "https://github.com/009os",
		label: "Github",
		// handle: "Omji Shukla",
	},
	{
		icon: <Linkedin size={20} />,
		href: "https://www.linkedin.com/in/009os/",
		label: "Linkedin",
		// handle: "Omji Shukla",
	},
	{
		icon: <Instagram size={20} />,
		href: "https://www.instagram.com/009os/",
		label: "Instagram",
		// handle: "Omji Shukla",
	},
	{
		icon: <PenSquare size={20} />,
		href: "https://medium.com/@omjishukla",
		label: "Medium",
		// handle: "Omji Shukla",
	},
];

export default function Example() {
	return (
		<div className=" bg-gradient-to-tl from-zinc-900/0 via-zinc-900 to-zinc-900/0">
			<Navigation />
			<div className="container flex items-center justify-center min-h-screen px-4 mx-auto">
				<div className="w-full max-w-6xl">
					<div className="text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight text-zinc-100 sm:text-4xl mb-6 font-display animate-fade-in">
							Let's Connect
						</h2>
						<p className="text-zinc-400 font-sans">
							Find me on these platforms and let's start a conversation
						</p>
					</div>
					<div className="grid w-full grid-cols-1 gap-8 mx-auto sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
					{socials.map((s, index) => (
						<div key={s.label} className="animate-slide-up" style={{ animationDelay: `${0.2 + index * 0.05}s` }}>
							<Card>
							<Link
								href={s.href}
								target="_blank"
								className="p-4 relative flex flex-col items-center gap-2 duration-700 group md:gap-3 md:py-6 md:px-6"
								>
								<span
									className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
									aria-hidden="true"
								/>
								<span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-1000 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
									{s.icon}
								</span>{" "}
								<div className="z-10 flex flex-col items-center">
									<span className="lg:text-xl font-medium duration-150 xl:text-3xl text-zinc-200 group-hover:text-white font-display">
										{/* {s.handle} */}
									</span>
									<span className="mt-4 text-sm text-center duration-1000 text-zinc-400 group-hover:text-zinc-200">
										{s.label}
									</span>
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
