import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

/** Set to false (or delete this file) to bring the site back. */
const MAINTENANCE_MODE = true;

export function middleware(_request: NextRequest) {
	if (!MAINTENANCE_MODE) {
		return NextResponse.next();
	}

	return new NextResponse(
		`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="robots" content="noindex" />
  <title>Site Down for Maintenance</title>
  <style>
    body {
      margin: 0;
      min-height: 100vh;
      display: grid;
      place-items: center;
      font-family: system-ui, sans-serif;
      background: #fff;
      color: #111;
    }
    h1 {
      font-size: 2rem;
      font-weight: 600;
      text-align: center;
      padding: 0 1.5rem;
    }
  </style>
</head>
<body>
  <h1>Site Down for Maintenance</h1>
</body>
</html>`,
		{
			status: 503,
			headers: {
				"content-type": "text/html; charset=utf-8",
				"Retry-After": "3600",
			},
		},
	);
}

export const config = {
	matcher: [
		"/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|ico)$).*)",
	],
};
