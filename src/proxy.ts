import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/**
 * The site is a single landing page. Every other path answers 410 Gone so
 * search engines drop the old site's pages from their index, while visitors
 * following an old link still get a way to the landing page.
 */
const GONE_PAGE = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="robots" content="noindex">
<title>Page removed | NorthPole Capital</title>
</head>
<body style="font-family:system-ui,sans-serif;display:grid;place-items:center;min-height:100vh;margin:0;text-align:center">
<main>
<h1>This page no longer exists</h1>
<p><a href="/">Go to NorthPole Capital</a></p>
</main>
</body>
</html>`;

export function proxy(request: NextRequest) {
	if (request.nextUrl.pathname === "/") {
		return NextResponse.next();
	}

	return new NextResponse(GONE_PAGE, {
		status: 410,
		headers: {
			"Content-Type": "text/html; charset=utf-8",
			"X-Robots-Tag": "noindex",
		},
	});
}

export const config = {
	matcher: [
		"/((?!_next/|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
	],
};
