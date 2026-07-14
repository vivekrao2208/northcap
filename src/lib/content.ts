export const firmStats = [
	{
		value: "120+",
		label: "Markets covered",
		note: "Across equities, fixed income, FX, and derivatives.",
	},
	{
		value: "8",
		label: "Global offices",
		note: "Trading and research hubs spanning Americas, EMEA, and APAC.",
	},
	{
		value: "35+",
		label: "Asset classes",
		note: "Systematic coverage across listed and OTC products.",
	},
	{
		value: "24/7",
		label: "Market presence",
		note: "Follow-the-sun trading and monitoring.",
	},
	{
		value: "40%",
		label: "Advanced degrees",
		note: "Team members with master's, PhD, or equivalent STEM credentials.¹",
	},
	{
		value: "50+",
		label: "Nationalities",
		note: "Collaborative teams drawn from dozens of countries.¹",
	},
] as const;

export const offices = [
	{ city: "New York", region: "Americas", timezone: "ET" },
	{ city: "Chicago", region: "Americas", timezone: "CT" },
	{ city: "London", region: "EMEA", timezone: "GMT" },
	{ city: "Amsterdam", region: "EMEA", timezone: "CET" },
	{ city: "Singapore", region: "APAC", timezone: "SGT" },
	{ city: "Hong Kong", region: "APAC", timezone: "HKT" },
	{ city: "Mumbai", region: "APAC", timezone: "IST" },
	{ city: "Sydney", region: "APAC", timezone: "AEST" },
] as const;

export const services = [
	{
		title: "Quantitative Trading",
		description:
			"Research-driven strategies across equities, options, futures, FX, and fixed income.",
		href: "/what-we-do#quantitative-trading",
	},
	{
		title: "Market Making",
		description:
			"Competitive two-sided liquidity that tightens spreads and improves market quality.",
		href: "/what-we-do#market-making",
	},
	{
		title: "Execution Services",
		description:
			"Institutional execution and liquidity access for brokers, banks, and asset managers.",
		href: "/what-we-do#execution",
	},
	{
		title: "Technology & Infrastructure",
		description:
			"Low-latency systems, data platforms, and research compute built in-house.",
		href: "/what-we-do#technology",
	},
	{
		title: "Quantitative Research & ML",
		description:
			"Statistical modeling, deep learning, and rapid research-to-production pipelines.",
		href: "/what-we-do#research",
	},
	{
		title: "Risk & Compliance",
		description:
			"End-to-end risk controls, market structure expertise, and regulatory diligence.",
		href: "/what-we-do#risk",
	},
] as const;

export const capabilities = [
	{
		title: "Research",
		description:
			"Signal discovery across vast market and alternative datasets, tested under real constraints.",
	},
	{
		title: "Technology",
		description:
			"From exchange connectivity to ML inference — systems engineered for speed and scale.",
	},
	{
		title: "Trading",
		description:
			"Probabilistic decision-making that turns insight into durable market outcomes.",
	},
] as const;

export const assetClasses = [
	"Equities",
	"Equity Options",
	"ETFs",
	"Futures",
	"FX",
	"Fixed Income",
	"Commodities",
	"Crypto",
] as const;

export const insights = [
	{
		category: "Engineering",
		title: "Building reliable low-latency paths from research to production",
		date: "June 12, 2026",
		excerpt:
			"How we keep the distance short between a validated idea and live market impact.",
		href: "/insights#engineering-latency",
	},
	{
		category: "Markets",
		title: "Liquidity, microstructure, and the cost of being second",
		date: "May 28, 2026",
		excerpt:
			"A practical look at how venue design and order-flow dynamics shape spreads.",
		href: "/insights#markets-liquidity",
	},
	{
		category: "Culture",
		title: "Mentorship that compounds: teaching decision-making under uncertainty",
		date: "April 9, 2026",
		excerpt:
			"Why cross-team apprenticeship is part of how we ship better strategies.",
		href: "/insights#culture-mentorship",
	},
	{
		category: "Engineering",
		title: "Data platforms that make iteration cheap",
		date: "March 18, 2026",
		excerpt:
			"Petabyte-scale pipelines designed so researchers can fail fast and learn faster.",
		href: "/insights#engineering-data",
	},
	{
		category: "Markets",
		title: "Multi-asset edges: modeling relationships across products and venues",
		date: "February 4, 2026",
		excerpt:
			"Breadth with precision — how shared infrastructure supports cross-asset research.",
		href: "/insights#markets-multi-asset",
	},
	{
		category: "Culture",
		title: "Puzzles, games, and calibrated risk-taking",
		date: "January 21, 2026",
		excerpt:
			"How competitive problem-solving shapes our interview and training culture.",
		href: "/insights#culture-puzzles",
	},
] as const;

export const values = [
	{
		title: "Think",
		description:
			"Curious, rigorous problem-solvers who start from first principles.",
	},
	{
		title: "Build",
		description:
			"Engineers and researchers who ship infrastructure worthy of live markets.",
	},
	{
		title: "Collaborate",
		description:
			"Flat teams where traders, quants, and technologists strengthen each other.",
	},
	{
		title: "Trade",
		description:
			"A shared obsession with markets and the math that governs them.",
	},
	{
		title: "Own",
		description:
			"High agency and accountability from idea to production outcome.",
	},
	{
		title: "Integrity",
		description:
			"We aim beyond compliance — fair, transparent markets for everyone.",
	},
] as const;

export const careerPaths = [
	{
		title: "Experienced Professionals",
		description:
			"Full-time roles for traders, researchers, engineers, and operators ready for leverage.",
		href: "/join-us#experienced",
	},
	{
		title: "Students & New Grads",
		description:
			"Internships and early-career tracks built around real projects and mentorship.",
		href: "/join-us#students",
	},
	{
		title: "Internships",
		description:
			"Immersive programs with direct exposure to research, trading, and engineering teams.",
		href: "/join-us#internships",
	},
	{
		title: "Talent Community",
		description:
			"Not ready to apply yet? Stay on our radar and hear about events and openings.",
		href: "/join-us#talent-community",
	},
] as const;

export const departments = [
	"Trading",
	"Technology",
	"Quantitative Research",
	"Operations",
] as const;

export const recruitmentSteps = [
	{
		step: "01",
		title: "Apply",
		description: "Submit your resume and tell us where you want to contribute.",
	},
	{
		step: "02",
		title: "Screen",
		description: "A short conversation on background, motivation, and fit.",
	},
	{
		step: "03",
		title: "Problem-solving",
		description: "Technical and analytical assessments tuned to the role.",
	},
	{
		step: "04",
		title: "Team interviews",
		description: "Meet the people you'd work with day to day.",
	},
	{
		step: "05",
		title: "Offer",
		description: "Aligned expectations, location, and start date.",
	},
] as const;

export const timeline = [
	{
		year: "Founding",
		title: "NorthPole Capital established",
		description:
			"A research-first trading firm built to solve hard problems in global markets.",
	},
	{
		year: "Expansion",
		title: "Multi-asset platform",
		description:
			"Scaled systematic coverage across products, venues, and time zones.",
	},
	{
		year: "Today",
		title: "Technology at the core",
		description:
			"Machine learning, low-latency systems, and shared infrastructure power every edge.",
	},
	{
		year: "Next",
		title: "Compounding capability",
		description:
			"Deeper research clusters, broader markets, and talent that raises the bar.",
	},
] as const;

export const testimonials = [
	{
		name: "A. Chen",
		role: "Quantitative Researcher",
		quote:
			"The distance between a strong idea and live P&L is unusually short here.",
	},
	{
		name: "M. Okonkwo",
		role: "Software Engineer",
		quote:
			"We own the full stack — and the feedback loop from production is immediate.",
	},
	{
		name: "S. Patel",
		role: "Trader",
		quote:
			"Mentorship is real. People share context freely so you can make better decisions.",
	},
] as const;

export const faqItems = [
	{
		q: "Do you hire internationally?",
		a: "Yes. We recruit globally and help successful candidates relocate to our office locations where required.",
	},
	{
		q: "Is the culture hybrid or on-site?",
		a: "Most trading and research roles are office-first to keep collaboration and market awareness high. Specific arrangements vary by team.",
	},
	{
		q: "What backgrounds succeed here?",
		a: "Strong quantitative foundations, programming fluency, curiosity under ambiguity — from CS, math, physics, engineering, and related fields.",
	},
	{
		q: "Do you sponsor visas?",
		a: "We evaluate sponsorship case by case depending on role, location, and experience.",
	},
] as const;
