import type { ReactNode } from "react";

export default function PageBackdrop({ children }: { children: ReactNode }) {
	return (
		<main className="relative min-h-screen pt-20 bg-white">
			<div
				className="pointer-events-none fixed inset-0 z-0 bg-[url('/abstract.png')] bg-cover bg-center bg-no-repeat"
				aria-hidden
			/>
			<div className="relative z-10">{children}</div>
		</main>
	);
}
