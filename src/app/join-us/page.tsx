import JoinUsForm from "@/components/JoinUsForm";

export default function JoinUsPage() {
	return (
		<main className="min-h-screen pt-20">
			<section className="container mx-auto px-4 py-16 md:py-24">
				<div className="max-w-xl mx-auto">
					<div className="mb-10 space-y-3">
						<h1 className="text-3xl md:text-4xl font-bold text-foreground">
							Join NorthPole Capital
						</h1>
						<p className="text-lg text-muted-foreground">
							Share your details and we&apos;ll be in touch about opportunities
							on our team.
						</p>
					</div>
					<JoinUsForm />
				</div>
			</section>
		</main>
	);
}
