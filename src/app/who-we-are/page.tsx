import Image from "next/image";
import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import { offices } from "@/lib/content";

export default function WhoWeArePage() {
	return (
		<PageBackdrop>
			<section className="container mx-auto px-4 py-16 md:py-24">
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Who We Are</span>
				</nav>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
					<div className="space-y-6">
						<p className="text-sm uppercase tracking-widest text-muted-foreground font-medium">
							Built by researchers, engineers, and traders
						</p>
						<h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
							Redefining the edge
						</h1>
						<h2 className="text-xl md:text-3xl text-muted-foreground">
							Powering the next frontier of quantitative finance.
						</h2>
						<p className="text-lg text-foreground/80 font-medium">
							Our mission: solve the hardest problems in global markets with
							science, technology, and a culture that compounds talent.
						</p>
					</div>
					<div className="relative h-[300px] md:h-[400px] w-full">
						<Image
							src="/trading-den.jpg"
							alt="NorthPole Capital trading floor"
							fill
							className="object-cover rounded-lg"
							priority
						/>
					</div>
				</div>
			</section>

			<section className="bg-muted/50">
				<div className="container mx-auto px-4 py-16 md:py-24">
					<div className="max-w-4xl mx-auto space-y-6">
						<p className="text-lg leading-relaxed text-foreground/80">
							NorthPole Capital is a premier multi-asset class quantitative
							trading firm dedicated to the advancement of global financial
							markets. We provide liquidity across diverse asset classes
							worldwide, harnessing state-of-the-art research, sophisticated
							quantitative modeling, and high-performance computing
							infrastructure to drive our proprietary trading methodologies.
						</p>
						<p className="text-lg leading-relaxed text-foreground/80">
							Our innovation-centric paradigm synthesizes rigorous quantitative
							science with leading-edge technological development. Beyond
							trading, we are committed to fortifying the efficiency,
							transparency, and structural resilience of the marketplace.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16 md:py-20">
				<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
					Our philosophy
				</h2>
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h3 className="text-xl font-semibold mb-3">Meritocracy &amp; collaboration</h3>
						<p className="text-muted-foreground leading-relaxed">
							Ideas win on evidence. We build flat, cross-functional teams where
							traders, quants, and engineers challenge each other — and share
							context freely so strong ideas travel from insight to production.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-3">Market integrity</h3>
						<p className="text-muted-foreground leading-relaxed">
							Our internal standards aim beyond regulatory minimums. We are
							conscientious market participants advocating for fair, transparent
							markets — a philosophy that shapes research and how we operate.
						</p>
					</div>
				</div>
				<blockquote className="mt-12 border-l-4 border-primary pl-6 text-xl text-foreground/80 italic max-w-3xl">
					&ldquo;It is essential to keep your mind free from subjective biases.&rdquo;
					<footer className="mt-3 text-sm not-italic text-muted-foreground">
						— Guiding principle for research and trading decisions
					</footer>
				</blockquote>
			</section>

			<section className="bg-muted/50 py-16 md:py-20">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-center">
						A platform for performance
					</h2>
					<p className="text-center text-muted-foreground max-w-3xl mx-auto mb-12">
						Shared infrastructure — market access, data, compute, risk, and
						compliance — lets our people focus on what they do best: trading and
						research.
					</p>
					<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
						{[
							{ label: "~40%", sub: "Advanced degrees" },
							{ label: "PhDs+", sub: "Across STEM disciplines" },
							{ label: "50+", sub: "Nationalities represented" },
							{ label: "4", sub: "Core departments" },
						].map((stat) => (
							<div
								key={stat.sub}
								className="bg-background border border-border rounded-lg p-6 text-center"
							>
								<p className="text-3xl font-bold text-foreground mb-2">
									{stat.label}
								</p>
								<p className="text-sm text-muted-foreground">{stat.sub}</p>
							</div>
						))}
					</div>
					<p className="text-xs text-muted-foreground text-center mt-6">
						Composition figures are illustrative and may change over time.
					</p>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16 md:py-20" id="offices">
				<h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
					Where we operate
				</h2>
				<p className="text-muted-foreground mb-10 max-w-2xl">
					A community of colleagues spanning {offices.length} offices worldwide —
					local expertise, global reach.
				</p>
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
					{offices.map((office) => (
						<div
							key={office.city}
							className="border border-border rounded-lg p-5"
						>
							<p className="font-semibold text-foreground text-lg">
								{office.city}
							</p>
							<p className="text-sm text-muted-foreground">
								{office.region} · {office.timezone}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4 grid md:grid-cols-3 gap-10">
					<div>
						<h3 className="text-xl font-semibold mb-3">Diversity &amp; inclusion</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							We hire ambitious people from every background. Representation
							across countries and disciplines is how we stay sharp under market
							uncertainty.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-3">Positive impact</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							We give time, talent, and funding to education, science, and
							communities where we live and work — because durable firms invest
							beyond the trading desk.
						</p>
					</div>
					<div>
						<h3 className="text-xl font-semibold mb-3">Recognition</h3>
						<p className="text-muted-foreground text-sm leading-relaxed">
							Industry recognition for market-making quality, technology
							innovation, and talent programs reflects the bar we hold ourselves
							to every day.
						</p>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16 md:py-20">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					<div>
						<h2 className="text-3xl font-bold text-foreground mb-4">
							A closer look
						</h2>
						<p className="text-muted-foreground mb-6 leading-relaxed">
							Life at NorthPole is collaborative, intense, and intellectually
							honest. Explore our offices, culture, and the people solving
							problems few get to see.
						</p>
						<div className="flex flex-wrap gap-4">
							<Link
								href="/our-culture"
								className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90"
							>
								Our Culture
							</Link>
							<Link
								href="/join-us"
								className="border border-border px-6 py-3 rounded-lg font-semibold hover:bg-muted"
							>
								Join Us
							</Link>
						</div>
					</div>
					<div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
						<Image
							src="/geneva.png"
							alt="NorthPole Capital office atmosphere"
							fill
							className="object-cover"
						/>
					</div>
				</div>
			</section>

			<section className="bg-primary text-primary-foreground py-14">
				<div className="container mx-auto px-4 text-center">
					<h2 className="text-2xl md:text-3xl font-bold mb-4">Contact</h2>
					<p className="text-primary-foreground/80 mb-2">
						General:{" "}
						<a href="mailto:info@northpolecapital.com" className="underline">
							info@northpolecapital.com
						</a>
					</p>
					<p className="text-primary-foreground/80 mb-6">
						Media:{" "}
						<a
							href="mailto:media@northpolecapital.com"
							className="underline"
						>
							media@northpolecapital.com
						</a>
					</p>
					<p className="text-sm text-primary-foreground/60 max-w-3xl mx-auto">
						Activities are conducted by regulated affiliates where required.
						See{" "}
						<Link href="/disclosures" className="underline">
							Disclosures
						</Link>{" "}
						for entity and registration details.
					</p>
				</div>
			</section>
		</PageBackdrop>
	);
}
