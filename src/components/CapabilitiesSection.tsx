"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { capabilities } from "@/lib/content";

export default function CapabilitiesSection() {
	return (
		<section className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.7 }}
					viewport={{ once: true }}
					className="text-center mb-14"
				>
					<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
						What We Do
					</h2>
					<p className="text-xl text-muted-foreground max-w-3xl mx-auto">
						One performance loop: researchers sharpen signals, engineers accelerate
						systems, and traders turn insight into outcomes.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-3 gap-8">
					{capabilities.map((item, index) => (
						<motion.div
							key={item.title}
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.12 }}
							viewport={{ once: true }}
							className="border border-border rounded-lg p-8 bg-muted/30"
						>
							<h3 className="text-2xl font-bold text-foreground mb-4">
								{item.title}
							</h3>
							<p className="text-muted-foreground mb-6">{item.description}</p>
							<Link
								href="/what-we-do"
								className="inline-flex items-center text-foreground font-medium hover:opacity-80"
							>
								Learn more
								<ChevronRight className="w-4 h-4 ml-1" />
							</Link>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
