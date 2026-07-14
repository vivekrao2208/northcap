"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { firmStats } from "@/lib/content";

function AnimatedStat({
	value,
	label,
	note,
	delay,
}: {
	value: string;
	label: string;
	note: string;
	delay: number;
}) {
	const ref = useRef<HTMLDivElement>(null);
	const inView = useInView(ref, { once: true, margin: "-40px" });
	const numeric = parseInt(value.replace(/[^0-9]/g, ""), 10);
	const suffix = value.replace(/[0-9]/g, "");
	const motionValue = useMotionValue(0);
	const spring = useSpring(motionValue, { stiffness: 60, damping: 20 });
	const displayRef = useRef<HTMLSpanElement>(null);

	useEffect(() => {
		if (inView && !Number.isNaN(numeric)) {
			motionValue.set(numeric);
		}
	}, [inView, motionValue, numeric]);

	useEffect(() => {
		const unsubscribe = spring.on("change", (latest) => {
			if (displayRef.current && !Number.isNaN(numeric)) {
				displayRef.current.textContent = `${Math.round(latest)}${suffix}`;
			}
		});
		return unsubscribe;
	}, [spring, numeric, suffix]);

	return (
		<motion.div
			ref={ref}
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6, delay }}
			viewport={{ once: true }}
			className="text-center px-4"
		>
			<p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
				{Number.isNaN(numeric) ? value : <span ref={displayRef}>{value}</span>}
			</p>
			<p className="text-base font-semibold text-foreground mb-2">{label}</p>
			<p className="text-sm text-muted-foreground max-w-xs mx-auto">{note}</p>
		</motion.div>
	);
}

export default function StatsSection() {
	return (
		<section className="py-16 md:py-20 bg-background border-y border-border">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid grid-cols-2 lg:grid-cols-3 gap-10 lg:gap-12">
					{firmStats.map((stat, index) => (
						<AnimatedStat
							key={stat.label}
							value={stat.value}
							label={stat.label}
							note={stat.note}
							delay={index * 0.08}
						/>
					))}
				</div>
				<p className="text-xs text-muted-foreground text-center mt-10 max-w-3xl mx-auto">
					¹ Figures are illustrative of firm composition and may change over time.
					Notional and volume metrics, where referenced elsewhere on this site, are
					approximate and provided for informational purposes only.
				</p>
			</div>
		</section>
	);
}
