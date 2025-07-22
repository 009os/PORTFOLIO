"use client";
import { PropsWithChildren } from "react";

interface CardProps extends PropsWithChildren {
	className?: string;
}

export const Card: React.FC<CardProps> = ({ children, className = "" }) => {
	return (
		<div
			className={`overflow-hidden relative border rounded-xl hover:bg-zinc-800/10 group md:gap-8 hover:border-zinc-400/50 border-zinc-600 hover:shadow-lg hover:shadow-zinc-500/10 transition-all duration-300 transform hover:scale-[1.01] ${className}`}
		>
			{children}
		</div>
	);
};
