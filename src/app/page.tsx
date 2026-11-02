import Image from "next/image";
import type { ReactNode } from "react";

const email = "info@northpolecapital.com";

// The history of quantitative finance, told as the tools that moved it forward.
const leaps = [
	{
		year: "1900",
		event:
			"Louis Bachelier models price movements on the Paris Bourse using the mathematics of probability, five years before Einstein applies the same mathematics to Brownian motion.",
	},
	{
		year: "1952",
		event:
			"Harry Markowitz lays the foundations of modern portfolio theory, establishing risk as something to be measured and balanced against return.",
	},
	{
		year: "1960s",
		event:
			"Edward Thorp demonstrates that rigorous mathematical analysis can yield a lasting edge, first at the blackjack table and then in financial markets.",
	},
	{
		year: "1973",
		event:
			"Fischer Black, Myron Scholes, and Robert Merton publish a framework for pricing options, giving derivatives markets a common language.",
	},
	{
		year: "1980s",
		event:
			"Computing arrives on the trading floor, and markets become a discipline of data, statistics, and speed.",
	},
	{
		year: "Now",
		event:
			"Intelligence itself becomes the tool. Machines begin to conduct research independently: writing code, testing hypotheses, and learning from the results.",
	},
] as const;

// Off-white and near-black rather than pure white and black, which feel harsh at full size.
const light = "bg-stone-50 text-neutral-950 selection:bg-neutral-950 selection:text-stone-50";
const dark = "bg-neutral-950 text-stone-50 selection:bg-stone-50 selection:text-neutral-950";
const container = "mx-auto max-w-6xl px-6 py-24 md:py-32";
const prose = "text-lg leading-relaxed text-pretty";
const focusRing =
	"rounded-sm outline-offset-4 focus-visible:outline-2 focus-visible:outline-current";

function Intro({
	number,
	title,
	children,
}: {
	number: string;
	title: string;
	children: ReactNode;
}) {
	return (
		<div className="grid gap-8 md:grid-cols-12 md:gap-12">
			{/* On wide screens the label stays in view while its section's text scrolls past. */}
			<h2 className="flex items-center gap-4 self-start text-xs font-semibold uppercase tracking-[0.3em] opacity-60 md:sticky md:top-24 md:col-span-4 md:pt-5">
				<span aria-hidden className="tabular-nums">
					{number}
				</span>
				<span aria-hidden className="h-px w-10 bg-current" />
				{title}
			</h2>
			<div className="md:col-span-8">{children}</div>
		</div>
	);
}

function Statement({ children }: { children: ReactNode }) {
	return (
		<p className="reveal font-barlow text-4xl font-medium leading-[1.05] tracking-tighter text-balance md:text-6xl">
			{children}
		</p>
	);
}

function Takeaway({ children }: { children: ReactNode }) {
	return (
		<p className="reveal mt-10 border-l border-current pl-6 text-lg font-medium leading-relaxed text-pretty">
			{children}
		</p>
	);
}

function Callout({ label, children }: { label?: string; children: ReactNode }) {
	return (
		<div className="reveal mt-24 grid gap-6 md:grid-cols-12 md:gap-x-12">
			{label && (
				<p className="text-xs font-semibold uppercase tracking-[0.3em] opacity-60 md:col-span-8 md:col-start-5">
					{label}
				</p>
			)}
			<p className="font-barlow text-3xl font-light leading-snug text-balance md:col-span-8 md:col-start-5 md:text-4xl">
				{children}
			</p>
		</div>
	);
}

function Hero() {
	return (
		<header className={`relative flex min-h-svh flex-col items-center overflow-hidden px-6 ${dark}`}>
			{/* Taking a larger share of the spare height than the line below sets the lockup slightly lower. */}
			<span aria-hidden className="w-px flex-[1.65] bg-linear-to-b from-transparent to-white/30" />
			<div className="flex flex-col items-center pb-12 text-center">
				{/* Logo and wordmark share one font size, so the logo (sized in em) scales with the text. */}
				<div className="flex items-center gap-[0.6em] text-[clamp(0.75rem,4vw,3rem)]">
					<Image
						src="/logo-light.png"
						alt=""
						width={1024}
						height={1024}
						preload
						className="size-[3.5em] shrink-0 motion-safe:animate-in fade-in zoom-in-95 animation-duration-1000 ease-out fill-mode-both"
					/>
					{/* The negative margin cancels the tracking after the last letter, keeping the lockup centered. */}
					<h1 className="-mr-[0.28em] whitespace-nowrap font-orbitron font-bold uppercase leading-none tracking-[0.28em] motion-safe:animate-in fade-in slide-in-from-bottom-2 animation-duration-1000 delay-300 ease-out fill-mode-both">
						NorthPole Capital
					</h1>
				</div>
				<div className="mt-8 flex flex-col items-center gap-8 motion-safe:animate-in fade-in animation-duration-1000 delay-600 ease-out fill-mode-both">
					<span aria-hidden className="h-px w-16 bg-white/40" />
					<p className="pl-[0.4em] font-barlow text-xs uppercase tracking-[0.4em] text-white/70 sm:text-sm">
						Beyond the Quantum Leap
					</p>
				</div>
			</div>
			<span aria-hidden className="w-px flex-1 bg-linear-to-b from-white/30 to-transparent" />
			<a
				href="#about"
				className={`my-6 p-2 pl-[calc(0.5rem+0.4em)] text-[0.65rem] font-semibold uppercase tracking-[0.4em] text-white/60 transition-colors hover:text-white ${focusRing}`}
			>
				Discover
			</a>
		</header>
	);
}

export default function Home() {
	return (
		<>
			<div aria-hidden className="scroll-progress fixed inset-x-0 top-0 z-50 h-0.5 bg-white mix-blend-difference" />
			<Hero />

			<main>
				<section id="about" className={light}>
					<div className={container}>
						<Intro number="01" title="Who we are">
							<Statement>A trading firm built&nbsp;and run by Autonomous Machines.</Statement>
							<div className={`mt-10 space-y-6 ${prose} text-neutral-600`}>
								<p>
									NorthPole Capital is an AI-centric quantitative finance firm. Our software
									development, research, and operations are carried out end to end by
									Autonomous Machines: AI and machine-learning systems that write our code,
									test our hypotheses, and operate our infrastructure.
								</p>
								<p>
									Artificial intelligence is not an addition to a traditional firm; it is the
									foundation on which NorthPole Capital is built. We believe the most ambitious
									work of the coming decades will be accomplished by people and intelligent
									systems working together, and that the frontier is the place to learn how.
								</p>
							</div>
							<Takeaway>
								Our people set the direction: which questions merit pursuit, what standard
								every answer must meet, and which boundaries are never crossed. Our Autonomous
								Machines carry out the work.
							</Takeaway>
						</Intro>
					</div>
				</section>

				<section id="story" className={dark}>
					<div className={container}>
						<Intro number="02" title="The story so far">
							<Statement>Quantitative finance has always advanced in leaps.</Statement>
							<p className={`mt-10 ${prose} text-white/70`}>
								Financial markets are among the most complex systems ever created: millions
								of participants condensing everything they know, and everything they fear,
								about the future into a single figure — a price. For more than a century, the
								greatest advances in interpreting that figure have come from the adoption of
								new tools.
							</p>
						</Intro>
						<ol className="mt-16 border-t border-white/15 md:mt-24">
							{leaps.map((leap) => (
								<li
									key={leap.year}
									className="reveal group grid gap-3 border-b border-white/15 py-8 md:grid-cols-12 md:items-baseline md:gap-12"
								>
									<span className="font-barlow text-4xl font-medium tabular-nums text-white/40 group-last:text-white md:col-span-4 md:text-5xl">
										{leap.year}
									</span>
									<p className={`${prose} text-white/70 group-last:text-white md:col-span-8`}>
										{leap.event}
									</p>
								</li>
							))}
						</ol>
						<div className="mt-16 md:grid md:grid-cols-12 md:gap-12">
							<div className="md:col-span-8 md:col-start-5">
								<p className={`${prose} text-white/70`}>
									Each leap rewarded those who adopted the new tool early and understood it
									most deeply. We believe the transition now underway is the most significant
									yet: from software that assists researchers to autonomous systems that
									conduct the research themselves.
								</p>
								<Takeaway>
									The next leap is underway. NorthPole Capital is built to lead it.
								</Takeaway>
							</div>
						</div>
					</div>
				</section>

				<section id="race" className={light}>
					<div className={container}>
						<Intro number="03" title="Our ambition">
							<Statement>We aim to achieve true AGI, and quantitative finance is the starting line.</Statement>
							<div className={`mt-10 space-y-6 ${prose} text-neutral-600`}>
								<p>
									Artificial General Intelligence — systems able to learn, reason, and make
									discoveries across any domain — is among the defining technological
									endeavors of this generation. Alongside it stands a broader deep-technology
									effort: translating frontier science into technology that changes how the
									world works. NorthPole Capital intends to contribute to both.
								</p>
								<p>
									Quantitative finance is a deliberate starting point. Financial markets are
									among the most demanding environments an intelligent system can face: noisy,
									adversarial, and continuously evolving, with every forecast tested against
									reality and against other participants pursuing the same goal. This makes
									them a rigorous benchmark of whether a machine can genuinely reason, and an
									exacting training ground for the intelligence we aim to build.
								</p>
							</div>
						</Intro>
						<Callout>
							The hardest test of intelligence is one that keeps changing.
						</Callout>
					</div>
				</section>

				<section id="impact" className={dark}>
					<div className={container}>
						<Intro number="04" title="Why it matters">
							<Statement>Prices steer capital. Capital shapes the world.</Statement>
							<div className={`mt-10 space-y-6 ${prose} text-white/70`}>
								<p>
									Every price reflects a judgment about the future: which companies will grow,
									which technologies will matter, and which risks are worth taking. The more
									accurately prices reflect reality, the more effectively capital reaches the
									ideas most worth building. Contributing to that accuracy is the first impact
									we intend to have.
								</p>
								<p>
									The second is broader. If a firm operated by Autonomous Machines can conduct
									rigorous, transparent research in one of the most competitive arenas in the
									world, the same approach can be applied to problems well beyond finance. We
									aim to demonstrate that it can, and to be among those who build what follows.
								</p>
								<p>
									NorthPole Capital is at an early stage. We would rather state our direction
									plainly than claim a track record we have yet to establish. What we offer is
									a clear thesis, a new operating model, and a long-term horizon.
								</p>
							</div>
						</Intro>
						<Callout label="Our true north">
							Markets are our proving ground. The&nbsp;world is where it matters.
						</Callout>
					</div>
				</section>
			</main>

			<footer id="contact" className={dark}>
				<div className="mx-auto max-w-6xl px-6 pb-12">
					<div className="border-t border-white/15 pt-24 md:pt-32">
						<Intro number="05" title="Contact">
							<Statement>Get in touch.</Statement>
							<address className="mt-12 border-y border-white/15 not-italic">
								<a
									href={`mailto:${email}`}
									className="group -mx-4 flex flex-col gap-2 px-4 py-6 transition-colors hover:bg-stone-50 hover:text-neutral-950 focus-visible:bg-stone-50 focus-visible:text-neutral-950 focus-visible:outline-none sm:flex-row sm:items-center sm:justify-between"
								>
									<span className="text-xs font-semibold uppercase tracking-[0.3em] text-white/60 group-hover:text-neutral-950/60 group-focus-visible:text-neutral-950/60">
										Email
									</span>
									<span className="font-barlow text-xl sm:text-2xl">{email}</span>
								</a>
							</address>
						</Intro>
					</div>

					<div className="mt-24 flex flex-col gap-6 border-t border-white/15 pt-10 md:flex-row md:items-center md:justify-between">
						<div className="flex items-center gap-3">
							<Image src="/logo-light.png" alt="" width={40} height={40} />
							<span className="font-orbitron text-xs font-bold uppercase tracking-[0.28em] sm:text-sm">
								NorthPole Capital
							</span>
						</div>
						<p className="text-sm text-white/60">
							© {new Date().getFullYear()} NorthPole Capital. All rights reserved.
						</p>
					</div>
					<p className="mt-8 max-w-4xl text-xs leading-relaxed text-white/60">
						This website is for informational purposes only and does not constitute an
						offer or solicitation to buy or sell any security or financial instrument.
					</p>
				</div>
			</footer>
		</>
	);
}
