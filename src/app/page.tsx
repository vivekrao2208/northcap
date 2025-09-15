"use client";

import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import TradingSection from "@/components/TradingSection";
import WorldMapSection from "@/components/WorldMapSection";
import Footer from "@/components/Footer";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />
			<AboutSection />
			<ServicesSection />
			<TradingSection />
			<WorldMapSection />
			<Footer />
		</div>
	);
}
