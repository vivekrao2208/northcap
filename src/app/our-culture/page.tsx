import Image from "next/image";
import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import { faqItems, testimonials, values } from "@/lib/content";

export default function CulturePage() {
	return (
		<PageBackdrop>
			<section className="container mx-auto px-4 py-16 md:py-24">
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Our Culture</span>
				</nav>
				<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6 max-w-3xl">
					Extraordinary talent. Exceptional teamwork.
				</h1>
				<p className="text-xl text-muted-foreground max-w-3xl">
					A stimulating, results-oriented environment where curious people solve
					hard problems together — with mentorship that compounds.
				</p>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-10 text-center">Core values</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{values.map((v) => (
							<div
								key={v.title}
								className="bg-background border border-border rounded-lg p-6"
							>
								<h3 className="text-xl font-bold mb-2">{v.title}</h3>
								<p className="text-muted-foreground text-sm">{v.description}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16 grid lg:grid-cols-2 gap-12 items-center">
				<div>
					<h2 className="text-3xl font-bold mb-4">Meritocracy &amp; ownership</h2>
					<p className="text-muted-foreground leading-relaxed mb-4">
						We are a team-first culture built on constant innovation. Motivated,
						highly analytical people thrive in almost any direction — trading,
						research, engineering, or operations.
					</p>
					<p className="text-muted-foreground leading-relaxed">
						Flat structures and open context keep the path from idea to impact
						short. Collaboration and mentoring are how we grow.
					</p>
				</div>
				<div className="relative h-64 md:h-80 rounded-lg overflow-hidden">
					<Image
						src="/trading-den.jpg"
						alt="Collaborative work environment"
						fill
						className="object-cover"
					/>
				</div>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8">Life at NorthPole</h2>
					<div className="grid md:grid-cols-3 gap-6 mb-12">
						{[
							{
								t: "Learning & development",
								d: "Internal talks, conference support, puzzles, and problem-solving sessions that sharpen decision-making under uncertainty.",
							},
							{
								t: "Mentorship",
								d: "Direct apprenticeship with experienced traders, researchers, and engineers — not just orientation, but continuous growth.",
							},
							{
								t: "Global collaboration",
								d: "Follow-the-sun teams share context across time zones so insight travels with the market day.",
							},
						].map((item) => (
							<div
								key={item.t}
								className="bg-background border border-border rounded-lg p-6"
							>
								<h3 className="font-semibold text-lg mb-2">{item.t}</h3>
								<p className="text-sm text-muted-foreground">{item.d}</p>
							</div>
						))}
					</div>
					<div className="grid md:grid-cols-2 gap-6">
						<div className="border border-border rounded-lg p-6 bg-background">
							<h3 className="font-semibold text-lg mb-2">Benefits &amp; perks</h3>
							<ul className="text-sm text-muted-foreground space-y-2 list-disc pl-5">
								<li>Competitive compensation aligned with impact</li>
								<li>Health coverage and wellness support</li>
								<li>Learning stipend and conference travel</li>
								<li>Modern offices designed for deep work and collaboration</li>
							</ul>
						</div>
						<div className="border border-border rounded-lg p-6 bg-background">
							<h3 className="font-semibold text-lg mb-2">Work arrangement</h3>
							<p className="text-sm text-muted-foreground leading-relaxed">
								Most trading and research roles are office-first to keep market
								awareness and collaboration high. Hybrid arrangements may apply
								for select technology and support roles by team.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<h2 className="text-3xl font-bold mb-4">Early careers &amp; programs</h2>
				<p className="text-muted-foreground mb-8 max-w-2xl">
					Structured pathways for students, interns, and new graduates — real
					projects, direct mentorship, and exposure to how markets actually work.
				</p>
				<div className="grid md:grid-cols-3 gap-6">
					{[
						{
							t: "Internships",
							d: "Immersive programs with production-relevant work and a supportive peer community.",
						},
						{
							t: "Campus recruiting",
							d: "University events, tech talks, and competitions that make the work tangible.",
						},
						{
							t: "Puzzles & events",
							d: "Meet-ups with puzzles, talks, and games that mirror how we hire and train.",
						},
					].map((p) => (
						<div key={p.t} className="border border-border rounded-lg p-6">
							<h3 className="font-semibold text-lg mb-2">{p.t}</h3>
							<p className="text-sm text-muted-foreground mb-4">{p.d}</p>
							<Link href="/join-us" className="text-sm font-medium underline">
								Explore pathways
							</Link>
						</div>
					))}
				</div>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4">
					<h2 className="text-3xl font-bold mb-8 text-center">
						Voices from the team
					</h2>
					<div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
						{testimonials.map((t) => (
							<figure
								key={t.name}
								className="bg-background border border-border rounded-lg p-6"
							>
								<blockquote className="text-foreground mb-4 leading-relaxed">
									&ldquo;{t.quote}&rdquo;
								</blockquote>
								<figcaption>
									<p className="font-semibold">{t.name}</p>
									<p className="text-sm text-muted-foreground">{t.role}</p>
								</figcaption>
							</figure>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<div className="grid md:grid-cols-2 gap-10">
					<div>
						<h2 className="text-2xl font-bold mb-3">Community &amp; giving</h2>
						<p className="text-muted-foreground leading-relaxed">
							From education initiatives to local volunteering, we invest in the
							communities around our offices. Strong markets need strong
							societies.
						</p>
					</div>
					<div>
						<h2 className="text-2xl font-bold mb-3">Ethics</h2>
						<p className="text-muted-foreground leading-relaxed">
							Our internal code of ethics exceeds regulatory baselines. Fairness,
							transparency, and personal accountability shape how we research
							and trade.
						</p>
					</div>
				</div>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4 max-w-3xl">
					<h2 className="text-3xl font-bold mb-8">Culture FAQ</h2>
					<div className="space-y-4">
						{faqItems.map((item) => (
							<details
								key={item.q}
								className="bg-background border border-border rounded-lg p-5 group"
							>
								<summary className="font-semibold cursor-pointer list-none flex justify-between items-center">
									{item.q}
									<span className="text-muted-foreground group-open:rotate-45 transition-transform">
										+
									</span>
								</summary>
								<p className="mt-3 text-sm text-muted-foreground leading-relaxed">
									{item.a}
								</p>
							</details>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16 text-center">
				<h2 className="text-3xl font-bold mb-4">Ready for the next challenge?</h2>
				<p className="text-muted-foreground mb-8">
					Join researchers, engineers, and traders at the cutting edge.
				</p>
				<Link
					href="/join-us"
					className="inline-flex bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90"
				>
					Start your journey
				</Link>
			</section>
		</PageBackdrop>
	);
}
