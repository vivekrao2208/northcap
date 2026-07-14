import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Fraud & Impersonation Warning" };

export default function FraudWarningPage() {
	return (
		<LegalLayout title="Fraud &amp; Impersonation Warning">
			<p>
				Scammers may impersonate NorthPole Capital employees or recruiters.
				Protect yourself.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">
				Know the warning signs
			</h2>
			<ul className="list-disc pl-5 space-y-2">
				<li>Unsolicited offers of employment requiring upfront payment</li>
				<li>Requests for personal financial details outside formal onboarding</li>
				<li>Email domains that do not match official NorthPole Capital domains</li>
				<li>Pressure to move conversations exclusively to chat apps or personal email</li>
			</ul>
			<h2 className="text-xl font-semibold text-foreground pt-4">What to do</h2>
			<p>
				Verify recruiting outreach through our careers channels. Report suspicious
				activity to{" "}
				<a
					href="mailto:security@northpolecapital.com"
					className="underline text-foreground"
				>
					security@northpolecapital.com
				</a>
				. We will never ask candidates to pay fees to apply or to receive an
				offer.
			</p>
		</LegalLayout>
	);
}
