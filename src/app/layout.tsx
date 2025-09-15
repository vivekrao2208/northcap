import type { Metadata } from "next";
import { Manrope, Orbitron } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

const manrope = Manrope({
	variable: "--font-manrope",
	subsets: ["latin"],
});

const orbitron = Orbitron({
	variable: "--font-orbitron",
	subsets: ["latin"],
	weight: ["400"],
});

export const metadata: Metadata = {
	title: "Northpole Capital",
	description: "Beyond The Quantum Leap",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${manrope.variable} ${orbitron.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	);
}
