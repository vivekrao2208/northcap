"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { offices } from "@/lib/content";

export default function WorldMapSection() {
	const [active, setActive] = useState<string | null>(null);

	return (
		<section className="py-20 bg-muted/50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
				<motion.div
					initial={{ opacity: 0, y: 50 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8 }}
					viewport={{ once: true }}
					className="text-center mb-10"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						Global Presence
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
						Serving clients across the world with local expertise and global reach.
					</p>
					<p className="text-foreground font-semibold">
						{offices.length} offices · {new Set(offices.map((o) => o.region)).size}{" "}
						regions · follow-the-sun coverage
					</p>
				</motion.div>

				<div className="flex flex-wrap justify-center gap-3 mb-6">
					{offices.map((office) => (
						<button
							key={office.city}
							type="button"
							onMouseEnter={() => setActive(office.city)}
							onMouseLeave={() => setActive(null)}
							onFocus={() => setActive(office.city)}
							onBlur={() => setActive(null)}
							className={`px-4 py-2 rounded-lg border text-sm font-medium transition-colors ${
								active === office.city
									? "bg-primary text-primary-foreground border-primary"
									: "bg-background border-border text-foreground hover:border-primary"
							}`}
						>
							{office.city}
							<span className="ml-2 text-xs opacity-70">{office.timezone}</span>
						</button>
					))}
				</div>

				<p
					className={`text-center text-muted-foreground min-h-6 transition-opacity ${
						active ? "opacity-100" : "opacity-0"
					}`}
					aria-hidden={!active}
				>
					{active
						? `${active} · ${offices.find((o) => o.city === active)?.region} trading & research hub`
						: "\u00a0"}
				</p>
			</div>

			<motion.div
				initial={{ opacity: 0, scale: 0.98 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 1 }}
				viewport={{ once: true }}
				className="relative w-full"
			>
				<Image
					src="/vintage_map.png"
					alt="Vintage world map showing NorthPole Capital global offices"
					width={1672}
					height={941}
					className="w-full h-auto"
					sizes="100vw"
					priority={false}
				/>
			</motion.div>
		</section>
	);
}
