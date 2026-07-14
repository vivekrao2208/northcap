import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Media Kit" };

export default function MediaKitPage() {
	return (
		<LegalLayout title="Press &amp; Media Kit">
			<p>
				For press inquiries, interview requests, and logo usage, contact our media
				team.
			</p>
			<p>
				Email:{" "}
				<a
					href="mailto:media@northpolecapital.com"
					className="underline text-foreground"
				>
					media@northpolecapital.com
				</a>
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Boilerplate</h2>
			<p>
				NorthPole Capital is a research-driven quantitative trading firm that
				combines advanced technology, machine learning, and market expertise to
				provide liquidity and solve complex problems across global markets.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Brand assets</h2>
			<p>
				Official logos are available on request. Do not alter marks or imply
				endorsement without written permission.
			</p>
		</LegalLayout>
	);
}
