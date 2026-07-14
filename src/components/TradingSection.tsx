"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { TrendingUp, BarChart3, Activity, Target, Cpu, Database } from "lucide-react";
import { assetClasses } from "@/lib/content";

export default function TradingSection() {
	const tradingFeatures = [
		{
			icon: <TrendingUp className="w-8 h-8" />,
			title: "Advanced Analytics",
			description: "Real-time market analysis with ML-powered insights",
		},
		{
			icon: <BarChart3 className="w-8 h-8" />,
			title: "Risk Management",
			description: "Firm-wide risk assessment and mitigation strategies",
		},
		{
			icon: <Activity className="w-8 h-8" />,
			title: "Live Monitoring",
			description: "24/7 portfolio monitoring and automated alerts",
		},
		{
			icon: <Target className="w-8 h-8" />,
			title: "Precision Execution",
			description: "Low-latency trading with millisecond precision",
		},
		{
			icon: <Cpu className="w-8 h-8" />,
			title: "ML Inference",
			description: "Live model serving engineered for market speed",
		},
		{
			icon: <Database className="w-8 h-8" />,
			title: "Built for Scale",
			description: "Petabyte-scale data and compute for rapid iteration",
		},
	];

	return (
		<section className="py-20 bg-background">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
							Trading Excellence
						</h2>
						<p className="text-xl text-muted-foreground mb-6">
							Experience the cutting-edge trading environment where technology meets
							financial expertise. Our infrastructure delivers performance and
							reliability across equities, FX, fixed income, options, and crypto.
						</p>
						<p className="text-muted-foreground mb-8">
							Capabilities include low-latency execution, live ML inference, and risk
							systems designed so strong ideas reach production quickly.
						</p>

						<div className="flex flex-wrap gap-2 mb-8">
							{assetClasses.map((asset) => (
								<span
									key={asset}
									className="text-xs font-medium px-3 py-1.5 border border-border rounded-md text-foreground bg-muted/40"
								>
									{asset}
								</span>
							))}
						</div>

						<div className="grid sm:grid-cols-2 gap-6">
							{tradingFeatures.map((feature, index) => (
								<motion.div
									key={feature.title}
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6, delay: index * 0.08 }}
									viewport={{ once: true }}
									className="flex items-start space-x-3"
								>
									<div className="flex-shrink-0 w-12 h-12 bg-muted rounded-lg flex items-center justify-center text-foreground">
										{feature.icon}
									</div>
									<div>
										<h3 className="font-semibold text-foreground mb-1">
											{feature.title}
										</h3>
										<p className="text-muted-foreground text-sm">
											{feature.description}
										</p>
									</div>
								</motion.div>
							))}
						</div>

						<motion.div
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.4 }}
							viewport={{ once: true }}
							className="mt-8"
						>
							<Link
								href="/what-we-do"
								className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-semibold"
							>
								Explore Trading Solutions
							</Link>
						</motion.div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
						className="relative"
					>
						<div className="relative rounded-lg overflow-hidden shadow-2xl">
							<Image
								src="/trading-den.jpg"
								alt="Trading Den"
								width={600}
								height={400}
								className="w-full h-auto"
							/>
							<div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent"></div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
