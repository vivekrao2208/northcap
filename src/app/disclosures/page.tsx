import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Disclosures" };

export default function DisclosuresPage() {
	return (
		<LegalLayout title="Disclosures &amp; Policies">
			<p>Last updated: July 14, 2026</p>
			<p>
				NorthPole Capital and its affiliates provide the information on this
				website for general informational purposes only. Nothing herein
				constitutes an offer, solicitation, or recommendation to buy or sell any
				financial instrument.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">
				Regulatory entities
			</h2>
			<p>
				Trading and related services are conducted through regulated affiliates
				where required by applicable law. Entity names, registrations, and
				jurisdictions are maintained in firm disclosures and may be provided upon
				request to qualified counterparties.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">
				Performance &amp; metrics
			</h2>
			<p>
				Any statistics, volumes, or illustrative figures on this site are
				approximate, may be outdated, and do not represent guarantees of future
				performance.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Equal opportunity</h2>
			<p>
				NorthPole Capital is an Equal Opportunity Employer. We evaluate candidates
				without regard to race, color, religion, sex, national origin, age,
				disability, veteran status, or other protected characteristics.
			</p>
			<p className="pt-4">
				Questions:{" "}
				<a
					href="mailto:legal@northpolecapital.com"
					className="underline text-foreground"
				>
					legal@northpolecapital.com
				</a>
			</p>
		</LegalLayout>
	);
}
