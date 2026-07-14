"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { timeline, values } from "@/lib/content";

export default function TimelineValuesSection() {
	return (
		<>
			<section className="py-16 bg-black text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-12">
						Built for the long game
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{timeline.map((item, index) => (
							<motion.div
								key={item.year}
								initial={{ opacity: 0, y: 24 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
								viewport={{ once: true }}
								className="border-l-2 border-white/40 pl-5"
							>
								<p className="text-sm font-semibold text-white/70 mb-1">
									{item.year}
								</p>
								<h3 className="text-lg font-bold text-white mb-2">
									{item.title}
								</h3>
								<p className="text-sm text-white/65">{item.description}</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>

			<section className="py-16 bg-black text-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
						How we work
					</h2>
					<p className="text-center text-white/65 mb-10 max-w-2xl mx-auto">
						Six commitments that shape hiring, collaboration, and trading decisions.
					</p>
					<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
						{values.map((value, index) => (
							<motion.div
								key={value.title}
								initial={{ opacity: 0, y: 16 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.4, delay: index * 0.05 }}
								viewport={{ once: true }}
								className="text-center p-4 border border-white/20 rounded-lg"
							>
								<p className="font-bold text-white mb-1">{value.title}</p>
								<p className="text-xs text-white/65 leading-snug">
									{value.description}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
