import Link from "next/link";
import PageBackdrop from "@/components/PageBackdrop";
import { insights } from "@/lib/content";

const categories = ["All", "Engineering", "Markets", "Culture"] as const;

export default function InsightsPage() {
	return (
		<PageBackdrop>
			<section className="container mx-auto px-4 py-16 md:py-24">
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Insights</span>
				</nav>
				<h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
					Insights &amp; tech notes
				</h1>
				<p className="text-xl text-muted-foreground max-w-3xl mb-8">
					In-depth discussions across engineering, markets, and culture — the
					thinking behind our work.
				</p>
				<div className="flex flex-wrap gap-2 mb-12">
					{categories.map((cat) => (
						<span
							key={cat}
							className="px-4 py-2 text-sm font-medium border border-border rounded-lg bg-muted/30"
						>
							{cat}
						</span>
					))}
				</div>

				<div className="grid md:grid-cols-2 gap-8">
					{insights.map((article) => (
						<article
							key={article.href}
							id={article.href.replace("/insights#", "")}
							className="scroll-mt-28 border border-border rounded-lg p-8 bg-muted/20"
						>
							<p className="text-xs uppercase tracking-wider text-muted-foreground mb-3">
								{article.category} · {article.date}
							</p>
							<h2 className="text-2xl font-bold text-foreground mb-3">
								{article.title}
							</h2>
							<p className="text-muted-foreground mb-6 leading-relaxed">
								{article.excerpt}
							</p>
							<p className="text-sm text-foreground/80 leading-relaxed">
								Full articles are published here as we share more of our
								engineering and market perspectives. Check back, or follow us on
								LinkedIn for announcements.
							</p>
						</article>
					))}
				</div>
			</section>

			<section className="bg-muted/50 py-16">
				<div className="container mx-auto px-4 max-w-xl text-center">
					<h2 className="text-2xl font-bold mb-3">Stay in the loop</h2>
					<p className="text-muted-foreground mb-6">
						Subscribe for new insights, open roles, and event announcements.
					</p>
					<form className="flex flex-col sm:flex-row gap-3">
						<input
							type="email"
							required
							placeholder="you@example.com"
							className="flex-1 h-11 rounded-md border border-border bg-background px-3 text-sm"
							aria-label="Email for newsletter"
						/>
						<button
							type="submit"
							className="h-11 px-6 rounded-md bg-primary text-primary-foreground font-semibold text-sm hover:bg-primary/90"
						>
							Subscribe
						</button>
					</form>
					<p className="text-xs text-muted-foreground mt-3">
						By subscribing you agree to our{" "}
						<Link href="/privacy" className="underline">
							Privacy Policy
						</Link>
						.
					</p>
				</div>
			</section>
		</PageBackdrop>
	);
}
