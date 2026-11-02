import type { Metadata, Viewport } from "next";
import { Barlow, Manrope, Orbitron } from "next/font/google";
import "./globals.css";

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
		"Beyond the Quantum Leap. NorthPole Capital is an AI-centric quantitative finance firm, built and run by Autonomous Machines.",
	openGraph: {
		title: "NorthPole Capital",
		description:
			"An AI-centric quantitative finance firm, built and run by Autonomous Machines.",
		type: "website",
	},
};

// Matches the hero and footer, so overscroll and the mobile browser chrome stay dark.
export const viewport: Viewport = {
	themeColor: "#0a0a0a",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="bg-neutral-950">
			<body
				className={`${manrope.variable} ${barlow.variable} ${orbitron.variable} antialiased`}
			>
				{children}
			</body>
		</html>
	);
}
