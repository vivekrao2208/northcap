"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Hero() {
	return (
		<section className="relative h-screen flex items-center justify-center overflow-hidden">
			<div className="absolute inset-0 z-0 overflow-hidden">
				<Image
					src="/char-wave01.jpeg"
					alt="Character Wave"
					fill
					className="object-cover"
					priority
				/>
				<div className="absolute inset-0 bg-foreground/20"></div>
			</div>

			<div className="relative z-10 text-center text-primary-foreground max-w-5xl mx-auto px-4">
				<motion.p
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
					className="text-sm md:text-base uppercase tracking-[0.2em] mb-4 text-primary-foreground/80 font-medium translate-y-4"
				>
					Research-driven quantitative trading firm
				</motion.p>
				<motion.h1
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					className="text-[3.15rem] md:text-[4.5rem] lg:text-[5.25rem] font-bold mb-6 tracking-[0.02em] lg:whitespace-nowrap"
				>
					Beyond the Quantum Leap
				</motion.h1>
				<motion.p
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.2 }}
					className="text-xl md:text-2xl mb-8 text-primary-foreground/80 max-w-2xl mx-auto font-medium"
				>
					Pioneering the future of financial technologies with cutting-edge quantitative
					methodologies.
				</motion.p>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, delay: 0.4 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center"
				>
					<Button
						asChild
						size="lg"
						className="px-8 py-4 h-16 text-lg font-semibold w-80 sm:w-56"
					>
						<Link href="/join-us">Explore Roles</Link>
					</Button>
					<Button
						asChild
						variant="outline"
						size="lg"
						className="px-8 py-4 bg-transparent h-16 text-lg font-semibold w-80 sm:w-56 border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10"
					>
						<Link href="/who-we-are">Learn More</Link>
					</Button>
				</motion.div>
			</div>
		</section>
	);
}
