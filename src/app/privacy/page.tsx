import LegalLayout from "@/components/LegalLayout";

export const metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
	return (
		<LegalLayout title="Privacy Policy">
			<p>Last updated: July 14, 2026</p>
			<p>
				NorthPole Capital LLC (&ldquo;we,&rdquo; &ldquo;us&rdquo;) respects your
				privacy. This policy describes how we collect, use, and protect personal
				information when you visit our website or submit forms.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">
				Information we collect
			</h2>
			<p>
				We may collect contact details you provide (name, email, resume links,
				messages), usage data such as IP address and browser type, and cookies
				as described in our Cookie Policy.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">How we use it</h2>
			<p>
				We use information to respond to inquiries, evaluate applications,
				improve our site, communicate with subscribers, and meet legal
				obligations.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Sharing</h2>
			<p>
				We do not sell personal information. We may share data with service
				providers under contract, or when required by law.
			</p>
			<h2 className="text-xl font-semibold text-foreground pt-4">Contact</h2>
			<p>
				Privacy questions:{" "}
				<a href="mailto:privacy@northpolecapital.com" className="underline text-foreground">
					privacy@northpolecapital.com
				</a>
			</p>
		</LegalLayout>
	);
}
