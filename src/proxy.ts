import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** The site is a single landing page: every other path redirects to it. */
export function proxy(request: NextRequest) {
	if (request.nextUrl.pathname === "/") {
		return NextResponse.next();
	}

	return NextResponse.redirect(new URL("/", request.url));
}

export const config = {
	matcher: [
		"/((?!_next/|favicon.ico|robots.txt|sitemap.xml|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
	],
};
