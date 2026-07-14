import LegalLayout from "@/components/LegalLayout";
import Link from "next/link";

export const metadata = { title: "Cookie Policy" };

export default function CookiesPage() {
	return (
		<LegalLayout title="Cookie Policy">
			<p>Last updated: July 14, 2026</p>
			<p>
				We use cookies and similar technologies to provide basic site
				functionality and, where permitted, analytics.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Types</h2>
			<ul className="list-disc pl-5 space-y-2">
				<li>
					<strong className="text-foreground">Essential</strong> — required for
					navigation and security.
				</li>
				<li>
					<strong className="text-foreground">Analytics</strong> — help us
					understand how the site is used (may be declined where required).
				</li>
			</ul>
			<p className="pt-4">
				For broader privacy practices, see our{" "}
				<Link href="/privacy" className="underline text-foreground">
					Privacy Policy
				</Link>
				.
			</p>
		</LegalLayout>
	);
}
