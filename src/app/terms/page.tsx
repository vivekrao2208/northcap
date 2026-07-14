import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Terms of Service" };

export default function TermsPage() {
	return (
		<LegalLayout title="Terms of Service">
			<p>Last updated: July 14, 2026</p>
			<p>
				By accessing northpolecapital.com, you agree to these terms. Content is
				provided for general information only and does not constitute investment,
				legal, or other professional advice.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">
				No offer or solicitation
			</h2>
			<p>
				Nothing on this site is an offer or solicitation to buy or sell any
				security, financial product, or service in any jurisdiction.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">
				Intellectual property
			</h2>
			<p>
				Site content, branding, and materials are owned by NorthPole Capital or
				its licensors and may not be copied without permission.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Limitation</h2>
			<p>
				To the fullest extent permitted by law, we disclaim liability for damages
				arising from use of this website.
			</p>
		</LegalLayout>
	);
}
