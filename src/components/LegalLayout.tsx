import Link from "next/link";
import type { ReactNode } from "react";

export default function LegalLayout({
	title,
	children,
}: {
	title: string;
	children: ReactNode;
}) {
	return (
		<main className="min-h-screen pt-20">
			<section className="container mx-auto px-4 py-16 md:py-20 max-w-3xl">
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">{title}</span>
				</nav>
				<h1 className="text-4xl font-bold text-foreground mb-8">{title}</h1>
				<div className="prose-legal space-y-4 text-muted-foreground leading-relaxed">
					{children}
				</div>
			</section>
		</main>
	);
}
