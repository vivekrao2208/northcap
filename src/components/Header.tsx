"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState, type ComponentType } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";

type Lang = "en" | "fr" | "nl" | "zh";

function UsFlag() {
	return (
		<svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
			<title>United States</title>
			<rect width="64" height="64" fill="#b22234" />
			{[1, 2, 3, 4, 5, 6].map((i) => (
				<rect
					key={i}
					y={(i * 2 - 1) * (64 / 13)}
					width="64"
					height={64 / 13}
					fill="#fff"
				/>
			))}
			<rect width="28" height={(7 * 64) / 13} fill="#3c3b6e" />
			{[0, 1, 2].map((row) =>
				[0, 1, 2].map((col) => (
					<circle
						key={`${row}-${col}`}
						cx={5 + col * 9}
						cy={5 + row * 9}
						r="1.6"
						fill="#fff"
					/>
				)),
			)}
		</svg>
	);
}

function CaFlag() {
	return (
		<svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
			<title>Canada</title>
			<rect width="64" height="64" fill="#fff" />
			<rect width="14" height="64" fill="#ff0000" />
			<rect x="50" width="14" height="64" fill="#ff0000" />
			<path
				fill="#ff0000"
				d="M32 12l1.2 3.8 2.2-1.4-.2 2.6 3.6.4-2.4 2.2 2.4 2.6-3.4-.8.8 3.6-2.8-1.8L32 28l-1.4-5.6-2.8 1.8.8-3.6-3.4.8 2.4-2.6-2.4-2.2 3.6-.4-.2-2.6 2.2 1.4z"
			/>
			<path fill="#ff0000" d="M31.2 28h1.6v8h-1.6z" />
		</svg>
	);
}

function NlFlag() {
	return (
		<svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
			<title>Netherlands</title>
			<rect width="64" height="64" fill="#21468b" />
			<rect width="64" height="21.33" fill="#ae1c28" />
			<rect y="21.33" width="64" height="21.33" fill="#fff" />
		</svg>
	);
}

function CnFlag() {
	return (
		<svg viewBox="0 0 64 64" className="h-full w-full" aria-hidden>
			<title>China</title>
			<rect width="64" height="64" fill="#de2910" />
			<polygon
				fill="#ffde00"
				points="14,10 15.9,15.5 21.8,15.5 17,18.9 18.9,24.4 14,21 9.1,24.4 11,18.9 6.2,15.5 12.1,15.5"
			/>
			{[
				[28, 8],
				[33, 14],
				[33, 22],
				[28, 28],
			].map(([cx, cy]) => (
				<circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="1.8" fill="#ffde00" />
			))}
		</svg>
	);
}

const languages: {
	code: Lang;
	label: string;
	Flag: ComponentType;
}[] = [
	{ code: "en", label: "EN", Flag: UsFlag },
	{ code: "fr", label: "FR", Flag: CaFlag },
	{ code: "nl", label: "NL", Flag: NlFlag },
	{ code: "zh", label: "ZH", Flag: CnFlag },
];

function FlagBadge({ Flag }: { Flag: ComponentType }) {
	return (
		<span className="inline-flex h-5 w-5 shrink-0 overflow-hidden rounded-full ring-1 ring-black/15">
			<Flag />
		</span>
	);
}

function LanguageSwitcher({ className = "" }: { className?: string }) {
	const [lang, setLang] = useState<Lang>("en");
	const [open, setOpen] = useState(false);
	const ref = useRef<HTMLDivElement>(null);

	const current = languages.find((l) => l.code === lang) ?? languages[0];
	const others = languages.filter((l) => l.code !== lang);

	useEffect(() => {
		function onPointerDown(e: PointerEvent) {
			if (ref.current && !ref.current.contains(e.target as Node)) {
				setOpen(false);
			}
		}
		document.addEventListener("pointerdown", onPointerDown);
		return () => document.removeEventListener("pointerdown", onPointerDown);
	}, []);

	return (
		<div ref={ref} className={`relative ${className}`}>
			<button
				type="button"
				onClick={() => setOpen((v) => !v)}
				aria-expanded={open}
				aria-haspopup="listbox"
				aria-label="Select language"
				className="flex items-center gap-2 uppercase tracking-[0.14em] text-sm font-semibold text-black hover:text-neutral-500 transition-colors"
			>
				<FlagBadge Flag={current.Flag} />
				{current.label}
			</button>

			{open && (
				<div className="absolute top-full right-0 mt-1 z-10 min-w-full bg-white border border-border shadow-sm">
					{others.map((option) => (
						<button
							key={option.code}
							type="button"
							onClick={() => {
								setLang(option.code);
								setOpen(false);
							}}
							className="flex w-full items-center gap-2 px-3 py-2 uppercase tracking-[0.14em] text-sm font-semibold text-black hover:bg-neutral-50 transition-colors whitespace-nowrap"
						>
							<FlagBadge Flag={option.Flag} />
							{option.label}
						</button>
					))}
				</div>
			)}
		</div>
	);
}

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navItems = [
		{ name: "WHO WE ARE", href: "/who-we-are" },
		{ name: "WHAT WE DO", href: "/what-we-do" },
		{ name: "OUR CULTURE", href: "/our-culture" },
		{ name: "INSIGHTS", href: "/insights" },
	];

	const navLinkClass =
		"uppercase tracking-[0.12em] text-black hover:text-neutral-500 transition-colors duration-200 font-medium text-base";

	return (
		<nav className="fixed top-0 w-full bg-background/95 backdrop-blur-sm border-b border-border z-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-1">
				<div className="flex justify-between items-center h-20">
					<motion.div
						initial={{ opacity: 0, x: -20 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5 }}
					>
						<Link
							href="/"
							className="flex items-center gap-3 hover:opacity-80 transition-opacity"
						>
							<Image
								src="/logo-dark.png"
								alt="NorthPole Capital"
								width={80}
								height={80}
								className="w-[4.5rem] h-[4.5rem] md:w-20 md:h-20"
							/>
							<span className="font-orbitron text-base md:text-lg tracking-[0.28em] uppercase text-foreground font-bold leading-none">
								NORTHPOLE CAPITAL
							</span>
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<div className="hidden md:flex items-center space-x-8 translate-x-8 lg:translate-x-12">
						{navItems.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.5, delay: index * 0.1 }}
							>
								<Link href={item.href} className={navLinkClass}>
									{item.name}
								</Link>
							</motion.div>
						))}
						<Link href="/join-us">
							<motion.button
								initial={{ opacity: 0, scale: 0.9 }}
								animate={{ opacity: 1, scale: 1 }}
								transition={{ duration: 0.5, delay: 0.4 }}
								className="bg-primary text-primary-foreground px-6 py-2 rounded-lg hover:bg-primary/90 transition-colors duration-200 font-medium"
							>
								Join Us
							</motion.button>
						</Link>
						<LanguageSwitcher />
					</div>

					{/* Mobile menu button + language */}
					<div className="md:hidden flex items-center gap-4 translate-x-4">
						<LanguageSwitcher />
						<button
							type="button"
							onClick={() => setIsMenuOpen(!isMenuOpen)}
							className="text-black hover:text-neutral-500"
						>
							{isMenuOpen ? <X size={24} /> : <Menu size={24} />}
						</button>
					</div>
				</div>

				{/* Mobile Navigation */}
				{isMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						className="md:hidden border-t border-border"
					>
						<div className="px-2 pt-2 pb-3 space-y-1">
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									className={`block px-3 py-2 hover:bg-muted rounded-md ${navLinkClass}`}
									onClick={() => setIsMenuOpen(false)}
								>
									{item.name}
								</Link>
							))}
							<Link href="/join-us" onClick={() => setIsMenuOpen(false)}>
								<Button className="w-full">JOIN US</Button>
							</Link>
						</div>
					</motion.div>
				)}
			</div>
		</nav>
	);
}
