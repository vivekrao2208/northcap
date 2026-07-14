import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import { assetClasses, services } from "@/lib/content";
import { ChevronRight } from "lucide-react";

const sections = [
	{
		id: "quantitative-trading",
		title: "Quantitative Trading",
		body: "Every strategy is grounded in research, stress-tested in live markets, and engineered to scale. We trade across time horizons and venues, turning predictive signal into durable outcomes.",
	},
	{
		id: "market-making",
		title: "Market Making & Liquidity",
		body: "We continuously quote competitive buy and sell prices using our own capital and technology — tightening spreads and helping create more efficient markets globally.",
	},
	{
		id: "execution",
		title: "Execution & Client Solutions",
		body: "Institutional clients access our liquidity through dedicated sales and trading coverage. We serve banks, brokers, and asset managers seeking transparent, technology-enabled execution.",
	},
	{
		id: "technology",
		title: "Technology & Infrastructure",
		body: "From exchange connectivity and low-latency C++ paths to large-scale data platforms and AI workflows — we build systems for resilience, speed, and rapid iteration.",
	},
	{
		id: "research",
		title: "Quantitative Research & Machine Learning",
		body: "Researchers use statistical modeling, deep learning, and reinforcement methods across vast market datasets. Infrastructure is designed so validated ideas reach production quickly.",
	},
	{
		id: "risk",
		title: "Risk Management & Compliance",
		body: "Risk and compliance are first-class systems — exposure controls, market-structure expertise, and governance that keep the firm and markets resilient.",
	},
] as const;

const pipeline = [
	"Build",
	"Ownership",
	"Validate",
	"Question",
	"Deploy",
	"Compound",
] as const;

const proofStats = [
	{ value: "100+", label: "Venues & connectivity themes" },
	{ value: "35+", label: "Asset classes in scope" },
	{ value: "Petabytes", label: "Market data processed at scale" },
	{ value: "ms", label: "Latency-aware execution paths" },
] as const;

export default function WhatWeDoPage() {
	return (
		<PageBackdrop>
			<section className="container mx-auto px-4 py-16 md:py-24">
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">What We Do</span>
				</nav>
				<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
					Solved from every angle, scaled across every market
				</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mb-10">
					Markets are high-speed and competitive. We bring research, technology,
					and trading into one loop to build models, systems, and strategies that
					win globally.
				</p>
				<div className="flex flex-wrap gap-4">
					<Link
						href="#execution"
						className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90"
					>
						Access Our Liquidity
					</Link>
					<Link
						href="/join-us"
						className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted"
					>
						Careers
					</Link>
				</div>
			</section>

			<section className="bg-muted/50 py-12">
				<div className="container mx-auto px-4">
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
						{proofStats.map((stat) => (
							<div
								key={stat.label}
								className="bg-background border border-border rounded-lg p-6 text-center"
							>
								<p className="text-3xl font-bold mb-2">{stat.value}</p>
								<p className="text-sm text-muted-foreground">{stat.label}</p>
							</div>
						))}
					</div>
					<p className="text-xs text-muted-foreground text-center mt-6">
						Metrics are directional indicators of capability and may vary. They
						do not constitute performance claims.
					</p>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<h2 className="text-2xl font-bold mb-6">Capabilities</h2>
				<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
					{services.map((s) => (
						<a
							key={s.title}
							href={s.href}
							className="border border-border rounded-lg p-5 hover:border-primary transition-colors"
						>
							<p className="font-semibold text-foreground mb-2">{s.title}</p>
							<p className="text-sm text-muted-foreground">{s.description}</p>
						</a>
					))}
				</div>

				<div className="space-y-16">
					{sections.map((section) => (
						<div key={section.id} id={section.id} className="scroll-mt-28">
							<h2 className="text-3xl font-bold text-foreground mb-4">
								{section.title}
							</h2>
							<p className="text-lg text-muted-foreground max-w-3xl leading-relaxed">
								{section.body}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-4">Multi-asset coverage</h2>
					<p className="text-muted-foreground mb-8 max-w-2xl">
						Breadth with precision — modeling relationships across products,
						venues, and conditions as they change.
					</p>
					<div className="flex flex-wrap gap-3">
						{assetClasses.map((a) => (
							<span
								key={a}
								className="px-4 py-2 bg-background border border-border rounded-lg text-sm font-medium"
							>
								{a}
							</span>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<h2 className="text-3xl font-bold mb-4">
					Research-to-production pipeline
				</h2>
				<p className="text-muted-foreground mb-8 max-w-2xl">
					Shared incentives and open context keep the distance between a strong
					idea and a live result short.
				</p>
				<div className="flex flex-wrap gap-3">
					{pipeline.map((step, i) => (
						<div key={step} className="flex items-center gap-3">
							<span className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-semibold text-sm">
								{step}
							</span>
							{i < pipeline.length - 1 && (
								<ChevronRight className="w-4 h-4 text-muted-foreground" />
							)}
						</div>
					))}
				</div>
			</section>

			<section id="onboarding" className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8">Client engagement</h2>
					<div className="grid md:grid-cols-3 gap-6 mb-12">
						{[
							{
								n: "01",
								t: "Connect",
								d: "Reach our institutional desk with your coverage needs and venues of interest.",
							},
							{
								n: "02",
								t: "Configure",
								d: "Align on products, connectivity, risk parameters, and commercial terms.",
							},
							{
								n: "03",
								t: "Trade",
								d: "Access liquidity with dedicated support and continuous technology improvement.",
							},
						].map((step) => (
							<div
								key={step.n}
								className="bg-background border border-border rounded-lg p-6"
							>
								<p className="text-sm font-bold text-primary mb-2">{step.n}</p>
								<h3 className="text-xl font-semibold mb-2">{step.t}</h3>
								<p className="text-muted-foreground text-sm">{step.d}</p>
							</div>
						))}
					</div>
					<div className="border border-border rounded-lg p-8 bg-background max-w-2xl">
						<h3 className="text-xl font-semibold mb-3">
							Request a conversation
						</h3>
						<p className="text-muted-foreground mb-4">
							Interested in liquidity, connectivity, or partnership? Contact
							our client team or explore strategic investments.
						</p>
						<p className="mb-2">
							<a
								href="mailto:clients@northpolecapital.com"
								className="font-medium underline"
							>
								clients@northpolecapital.com
							</a>
						</p>
						<p className="text-sm text-muted-foreground mb-6">
							API and workflow connectivity available where supported. Ask about
							demo access for institutional partners.
						</p>
						<Link
							href="/who-we-are"
							className="text-sm font-medium inline-flex items-center"
						>
							About our firm
							<ChevronRight className="w-4 h-4 ml-1" />
						</Link>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-2xl font-bold mb-3">Regulatory posture</h2>
						<p className="text-muted-foreground leading-relaxed">
							We operate through regulated entities where required and maintain
							robust compliance frameworks. Transparency and controls are built
							into how we access markets and serve clients.
						</p>
						<Link
							href="/disclosures"
							className="inline-flex items-center mt-4 font-medium"
						>
							Read disclosures
							<ChevronRight className="w-4 h-4 ml-1" />
						</Link>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-3">Ventures</h2>
						<p className="text-muted-foreground leading-relaxed">
							Where aligned with our mission, we explore strategic investments
							that advance trading, technology, and market infrastructure.
						</p>
						<a
							href="mailto:ventures@northpolecapital.com"
							className="inline-flex items-center mt-4 font-medium"
						>
							ventures@northpolecapital.com
							<ChevronRight className="w-4 h-4 ml-1" />
						</a>
					</div>
				</div>
			</section>
		</PageBackdrop>
	);
}
