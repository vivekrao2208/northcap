import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
	const base = "https://www.northpolecapital.com";
	const paths = [
		"",
		"/who-we-are",
		"/what-we-do",
		"/our-culture",
		"/insights",
		"/join-us",
		"/privacy",
		"/terms",
		"/cookies",
		"/disclosures",
		"/fraud-warning",
		"/media-kit",
	];
	return paths.map((path) => ({
		url: `${base}${path}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: path === "" ? 1 : 0.7,
	}));
}
