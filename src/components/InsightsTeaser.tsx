"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { insights } from "@/lib/content";

export default function InsightsTeaser() {
	const featured = insights.slice(0, 3);

	return (
		<section className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-12">
					<div>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
							Featured Insights
						</h2>
						<p className="text-xl text-muted-foreground max-w-2xl">
							Engineering deep-dives, market perspectives, and culture notes from the
							people building our edge.
						</p>
					</div>
					<Link
						href="/insights"
						className="inline-flex items-center font-medium text-foreground hover:opacity-80"
					>
						View all insights
						<ChevronRight className="w-4 h-4 ml-1" />
					</Link>
				</div>

				<div className="grid md:grid-cols-3 gap-8">
					{featured.map((article, index) => (
						<motion.article
							key={article.title}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: index * 0.1 }}
							viewport={{ once: true }}
							className="border border-border rounded-lg p-6 bg-muted/20 hover:border-primary/40 transition-colors"
						>
							<p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
								{article.category} · {article.date}
							</p>
							<h3 className="text-xl font-semibold text-foreground mb-3">
								{article.title}
							</h3>
							<p className="text-muted-foreground mb-4">{article.excerpt}</p>
							<Link
								href={article.href}
								className="inline-flex items-center text-sm font-medium text-foreground"
							>
								Read more
								<ChevronRight className="w-4 h-4 ml-1" />
							</Link>
						</motion.article>
					))}
				</div>
			</div>
		</section>
	);
}
