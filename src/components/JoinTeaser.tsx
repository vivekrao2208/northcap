"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { careerPaths } from "@/lib/content";

export default function JoinTeaser() {
	return (
		<section className="py-20 bg-white text-foreground">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold mb-6">
							Where careers accelerate
						</h2>
						<p className="text-xl text-muted-foreground mb-8">
							Unmatched problems, rich mentorship, and the chance to make an immediate
							impact on global markets. Join researchers, engineers, and traders who
							raise the bar together.
						</p>
						<div className="flex flex-col sm:flex-row gap-4">
							<Button asChild size="lg" className="font-semibold">
								<Link href="/join-us">Work With Us</Link>
							</Button>
							<Button
								asChild
								size="lg"
								variant="outline"
								className="font-semibold"
							>
								<Link href="/what-we-do#execution">Trade With Us</Link>
							</Button>
						</div>
					</div>
					<div className="grid sm:grid-cols-2 gap-4">
						{careerPaths.map((path, index) => (
							<motion.div
								key={path.title}
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.08 }}
								viewport={{ once: true }}
							>
								<Link
									href={path.href}
									className="block h-full p-5 rounded-lg border border-border hover:bg-muted/60 transition-colors"
								>
									<h3 className="font-semibold mb-2">{path.title}</h3>
									<p className="text-sm text-muted-foreground">
										{path.description}
									</p>
								</Link>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
