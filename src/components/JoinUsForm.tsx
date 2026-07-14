"use client";

import { useId, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { departments } from "@/lib/content";

type FormMode = "apply" | "talent";

export default function JoinUsForm({ mode = "apply" }: { mode?: FormMode }) {
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();
	const deptId = useId();
	const resumeId = useId();
	const pathId = useId();
	const [submitted, setSubmitted] = useState(false);

	if (submitted) {
		return (
			<div className="border border-border rounded-lg p-8 bg-muted/30 text-center">
				<p className="text-lg font-semibold text-foreground mb-2">
					Thank you — we received your details.
				</p>
				<p className="text-muted-foreground">
					Our recruiting team will follow up if there is a match.
				</p>
			</div>
		);
	}

	return (
		<form
			className="grid gap-6"
			onSubmit={(event) => {
				event.preventDefault();
				setSubmitted(true);
			}}
		>
			<div className="grid gap-2">
				<Label htmlFor={nameId}>Full name</Label>
				<Input id={nameId} name="name" placeholder="Jane Doe" required />
			</div>
			<div className="grid gap-2">
				<Label htmlFor={emailId}>Email</Label>
				<Input
					id={emailId}
					name="email"
					type="email"
					placeholder="jane@example.com"
					required
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor={pathId}>Pathway</Label>
				<select
					id={pathId}
					name="pathway"
					required
					defaultValue={mode === "talent" ? "Talent Community" : ""}
					className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
				>
					<option value="" disabled>
						Select a pathway
					</option>
					<option>Experienced</option>
					<option>Students &amp; New Grads</option>
					<option>Internships</option>
					<option>Talent Community</option>
				</select>
			</div>
			<div className="grid gap-2">
				<Label htmlFor={deptId}>Department interest</Label>
				<select
					id={deptId}
					name="department"
					required
					defaultValue=""
					className="h-9 w-full rounded-md border border-input bg-transparent px-3 text-sm"
				>
					<option value="" disabled>
						Select a department
					</option>
					{departments.map((d) => (
						<option key={d} value={d}>
							{d}
						</option>
					))}
				</select>
			</div>
			<div className="grid gap-2">
				<Label htmlFor={resumeId}>LinkedIn or portfolio URL</Label>
				<Input
					id={resumeId}
					name="resume"
					type="url"
					placeholder="https://linkedin.com/in/..."
				/>
			</div>
			<div className="grid gap-2">
				<Label htmlFor={messageId}>
					{mode === "talent" ? "Tell us about your interests" : "Why NorthPole Capital?"}
				</Label>
				<Textarea
					id={messageId}
					name="message"
					placeholder="Background, focus areas, and what you want to work on..."
					rows={5}
					required
				/>
			</div>
			<Button type="submit" size="lg" className="w-full sm:w-auto">
				{mode === "talent" ? "Join talent community" : "Submit application"}
			</Button>
		</form>
	);
}
