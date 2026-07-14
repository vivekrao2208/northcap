"use client";

import Hero from "@/components/Hero";
import StatsSection from "@/components/StatsSection";
import CapabilitiesSection from "@/components/CapabilitiesSection";
import ServicesSection from "@/components/ServicesSection";
import TradingSection from "@/components/TradingSection";
import TimelineValuesSection from "@/components/TimelineValuesSection";
import WorldMapSection from "@/components/WorldMapSection";
import InsightsTeaser from "@/components/InsightsTeaser";
import JoinTeaser from "@/components/JoinTeaser";

export default function Home() {
	return (
		<div className="min-h-screen bg-background">
			<Hero />
			<StatsSection />
			<CapabilitiesSection />
			<ServicesSection />
			<TradingSection />
			<TimelineValuesSection />
			<WorldMapSection />
			<InsightsTeaser />
			<JoinTeaser />
		</div>
	);
}
