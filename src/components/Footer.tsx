"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Footer() {
	const [email, setEmail] = useState("");
	const [subscribed, setSubscribed] = useState(false);

	const servicesLinks = [
		{ name: "Quantitative Trading", href: "/what-we-do#quantitative-trading" },
		{ name: "Market Making", href: "/what-we-do#market-making" },
		{ name: "Execution Services", href: "/what-we-do#execution" },
		{ name: "Technology", href: "/what-we-do#technology" },
		{ name: "Research & ML", href: "/what-we-do#research" },
		{ name: "Risk & Compliance", href: "/what-we-do#risk" },
	];

	const companyLinks = [
		{ name: "Who We Are", href: "/who-we-are" },
		{ name: "Our Culture", href: "/our-culture" },
		{ name: "Insights", href: "/insights" },
		{ name: "Join Us", href: "/join-us" },
		{ name: "Offices", href: "/who-we-are#offices" },
		{ name: "Contact", href: "mailto:info@northpolecapital.com" },
	];

	const legalLinks = [
		{ name: "Privacy Policy", href: "/privacy" },
		{ name: "Terms of Service", href: "/terms" },
		{ name: "Cookie Policy", href: "/cookies" },
		{ name: "Disclosures", href: "/disclosures" },
		{ name: "Fraud Warning", href: "/fraud-warning" },
	];

	return (
		<footer className="bg-black text-primary-foreground">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
				<div className="grid md:grid-cols-4 gap-8">
					<div className="md:col-span-2">
						<Link
							href="/"
							className="flex items-center gap-3 mb-6 hover:opacity-80 transition-opacity w-fit"
						>
							<Image
								src="/logo-light.png"
								alt="NorthPole Capital"
								width={80}
								height={80}
								className="w-[4.5rem] h-[4.5rem] md:w-20 md:h-20"
							/>
							<span className="font-orbitron text-base md:text-lg tracking-[0.28em] uppercase text-primary-foreground font-bold leading-none">
								NORTHPOLE CAPITAL
							</span>
						</Link>
						<p className="text-primary-foreground/70 mb-6 max-w-md">
							Beyond the Quantum Leap. A research-driven quantitative trading
							firm pioneering technology and market excellence.
						</p>
						<div className="flex space-x-4 mb-8">
							<a
								href="https://www.linkedin.com/"
								target="_blank"
								rel="noopener noreferrer"
								className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors text-sm font-semibold"
								aria-label="LinkedIn"
							>
								in
							</a>
							<a
								href="mailto:info@northpolecapital.com"
								className="w-10 h-10 bg-primary-foreground/20 rounded-lg flex items-center justify-center hover:bg-primary-foreground/30 transition-colors text-xs font-semibold"
								aria-label="Email"
							>
								@
							</a>
						</div>
						<div className="max-w-sm">
							<p className="text-sm font-semibold mb-2">Newsletter</p>
							{subscribed ? (
								<p className="text-sm text-primary-foreground/70">
									Thanks — you&apos;re on the list.
								</p>
							) : (
								<form
									className="flex gap-2"
									onSubmit={(e) => {
										e.preventDefault();
										setSubscribed(true);
									}}
								>
									<input
										type="email"
										required
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										placeholder="Email address"
										className="flex-1 h-10 rounded-md px-3 text-sm text-foreground bg-primary-foreground"
										aria-label="Newsletter email"
									/>
									<button
										type="submit"
										className="h-10 px-4 rounded-md bg-primary-foreground/20 hover:bg-primary-foreground/30 text-sm font-semibold"
									>
										Subscribe
									</button>
								</form>
							)}
						</div>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">Services</h3>
						<ul className="space-y-3">
							{servicesLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold mb-6">Company</h3>
						<ul className="space-y-3">
							{companyLinks.map((link) => (
								<li key={link.name}>
									<Link
										href={link.href}
										className="text-primary-foreground/70 hover:text-primary-foreground transition-colors duration-200"
									>
										{link.name}
									</Link>
								</li>
							))}
						</ul>
						<p className="mt-6">
							<Link
								href="/media-kit"
								className="text-sm text-primary-foreground/70 hover:text-primary-foreground underline"
							>
								Press / media kit
							</Link>
						</p>
					</div>
				</div>

				<div className="border-t border-primary-foreground/20 mt-12 pt-8 space-y-4">
					<p className="text-xs text-primary-foreground/60 leading-relaxed max-w-5xl">
						© {new Date().getFullYear()} NorthPole Capital LLC. All rights
						reserved. This website is for informational purposes only and does
						not constitute an offer or solicitation to buy or sell any security
						or financial instrument. Services are provided by regulated entities
						where required. See{" "}
						<Link href="/disclosures" className="underline">
							Disclosures
						</Link>{" "}
						for details. NorthPole Capital is an Equal Opportunity Employer.
					</p>
					<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
						<p className="text-primary-foreground/70 text-sm">
							© {new Date().getFullYear()} NorthPole Capital LLC
						</p>
						<div className="flex flex-wrap gap-x-6 gap-y-2">
							{legalLinks.map((link) => (
								<Link
									key={link.name}
									href={link.href}
									className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors duration-200"
								>
									{link.name}
								</Link>
							))}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
