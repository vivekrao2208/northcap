import type { Metadata } from "next";
import { Barlow, Manrope, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

const barlow = Barlow({
	variable: "--font-barlow",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700", "800"],
});

const orbitron = Orbitron({
	variable: "--font-orbitron",
	subsets: ["latin"],
	weight: ["400", "700", "800"],
});

export const metadata: Metadata = {
	title: {
		default: "NorthPole Capital",
		template: "%s | NorthPole Capital",
	},
	description:
		"Beyond The Quantum Leap — research-driven quantitative trading, technology, and liquidity across global markets.",
	openGraph: {
		title: "NorthPole Capital",
		description:
			"Research-driven quantitative trading firm pioneering financial technology.",
		type: "website",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${manrope.variable} ${barlow.variable} ${orbitron.variable} antialiased`}
			>
				<a
					href="#main-content"
					className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[100] focus:bg-background focus:text-foreground focus:px-4 focus:py-2 focus:rounded-md focus:shadow"
				>
					Skip to content
				</a>
				<Header />
				<div id="main-content">{children}</div>
				<Footer />
			</body>
		</html>
	);
}
