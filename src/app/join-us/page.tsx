import Link from "next/link";
import JoinUsForm from "@/components/JoinUsForm";
import PageBackdrop from "@/components/PageBackdrop";
import {
	careerPaths,
	departments,
	recruitmentSteps,
} from "@/lib/content";

const openRoles = [
	{
		title: "Quantitative Researcher",
		location: "New York / London",
		type: "Experienced",
		dept: "Quantitative Research",
	},
	{
		title: "Low-Latency C++ Engineer",
		location: "Chicago / Amsterdam",
		type: "Experienced",
		dept: "Technology",
	},
	{
		title: "Options Trader",
		location: "New York / Singapore",
		type: "Experienced",
		dept: "Trading",
	},
	{
		title: "Trading Intern",
		location: "New York",
		type: "Internship",
		dept: "Trading",
	},
	{
		title: "Software Engineering Intern",
		location: "London / Mumbai",
		type: "Internship",
		dept: "Technology",
	},
	{
		title: "Graduate — Quantitative Research",
		location: "Multiple offices",
		type: "New Grad",
		dept: "Quantitative Research",
	},
];

export default function JoinUsPage() {
	return (
		<PageBackdrop>
			<section className="container mx-auto px-4 py-16 md:py-20">
				<nav className="text-sm text-muted-foreground mb-8">
					<Link href="/" className="hover:text-foreground">
						Home
					</Link>
					<span className="mx-2">/</span>
					<span className="text-foreground">Join Us</span>
				</nav>
				<h1 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
					Join NorthPole Capital
				</h1>
				<p className="text-lg text-muted-foreground max-w-2xl mb-8">
					Strengthen your problem-solving skills with real-world challenges and a
					supportive community of traders, researchers, and engineers.
				</p>
				<div className="flex flex-wrap gap-3">
					{careerPaths.map((p) => (
						<a
							key={p.title}
							href={p.href}
							className="px-4 py-2 text-sm border border-border rounded-lg hover:bg-muted font-medium"
						>
							{p.title}
						</a>
					))}
				</div>
			</section>

			<section className="bg-muted/50 py-14">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-6">Open roles</h2>
					<p className="text-muted-foreground mb-8 text-sm">
						Sample openings — apply below or email{" "}
						<a href="mailto:careers@northpolecapital.com" className="underline">
							careers@northpolecapital.com
						</a>
						. Roles span {departments.join(", ")}.
					</p>
					<div className="space-y-3">
						{openRoles.map((role) => (
							<div
								key={role.title + role.location}
								className="bg-background border border-border rounded-lg px-5 py-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2"
							>
								<div>
									<p className="font-semibold text-foreground">{role.title}</p>
									<p className="text-sm text-muted-foreground">
										{role.dept} · {role.location}
									</p>
								</div>
								<span className="text-xs font-medium px-3 py-1 border border-border rounded-md w-fit">
									{role.type}
								</span>
							</div>
						))}
					</div>
				</div>
			</section>

			<section className="container mx-auto px-4 py-14">
				<div className="grid lg:grid-cols-2 gap-10">
					{(
						[
							{
								id: "experienced",
								title: "Experienced professionals",
								body: "Bring expertise into an ecosystem built for leverage — infrastructure, data, and market complexity giving your skills a direct path to impact.",
							},
							{
								id: "students",
								title: "Students & new grads",
								body: "Graduate roles and campus programs designed to build context fast through structured training and work connected to real markets.",
							},
							{
								id: "internships",
								title: "Internships",
								body: "Direct mentorship, production-relevant projects, and a community of peers. Typical programs run 8–12 weeks across trading, research, and engineering.",
							},
							{
								id: "talent-community",
								title: "Talent community",
								body: "Not ready to apply? Share your resume and stay informed about events, puzzles, and openings that match your interests.",
							},
						] as const
					).map((block) => (
						<div key={block.id} id={block.id} className="scroll-mt-28">
							<h2 className="text-2xl font-bold mb-3">{block.title}</h2>
							<p className="text-muted-foreground leading-relaxed">
								{block.body}
							</p>
						</div>
					))}
				</div>
			</section>

			<section className="bg-muted/50 py-14">
				<div className="container mx-auto px-4">
					<h2 className="text-2xl font-bold mb-8 text-center">
						Recruitment process
					</h2>
					<div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-5xl mx-auto">
						{recruitmentSteps.map((step) => (
							<div
								key={step.step}
								className="bg-background border border-border rounded-lg p-5 text-center"
							>
								<p className="text-sm font-bold text-primary mb-2">
									{step.step}
								</p>
								<h3 className="font-semibold mb-2">{step.title}</h3>
								<p className="text-xs text-muted-foreground">{step.description}</p>
							</div>
						))}
					</div>
					<p className="text-center text-sm text-muted-foreground mt-8 max-w-2xl mx-auto">
						Interviewing emphasizes problem-solving under uncertainty, coding or
						quantitative depth depending on role, and collaborative fit with the
						team.
					</p>
				</div>
			</section>

			<section className="container mx-auto px-4 py-16">
				<div className="grid lg:grid-cols-2 gap-12">
					<div>
						<h2 className="text-2xl font-bold mb-3">Apply</h2>
						<p className="text-muted-foreground mb-8">
							Share your details and we&apos;ll be in touch about opportunities
							on our team.
						</p>
						<JoinUsForm mode="apply" />
					</div>
					<div id="talent-form" className="scroll-mt-28">
						<h2 className="text-2xl font-bold mb-3">Talent community</h2>
						<p className="text-muted-foreground mb-8">
							Prefer a softer start? Join our community and we&apos;ll share
							events and roles when relevant.
						</p>
						<JoinUsForm mode="talent" />
					</div>
				</div>
			</section>

			<section className="bg-muted/50 py-10">
				<div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
					<p className="mb-2">
						Campus events and fellowship announcements are posted with our{" "}
						<Link href="/insights" className="underline">
							Insights
						</Link>{" "}
						and on LinkedIn.
					</p>
					<p>
						Protect yourself from fraud — see our{" "}
						<Link href="/fraud-warning" className="underline">
							Fraud &amp; Impersonation Warning
						</Link>
						.
					</p>
					<p className="mt-4">
						NorthPole Capital is an Equal Opportunity Employer.
					</p>
				</div>
			</section>
		</PageBackdrop>
	);
}
