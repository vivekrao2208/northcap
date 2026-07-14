"use client";

import { useId } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

export default function JoinUsForm() {
	const nameId = useId();
	const emailId = useId();
	const messageId = useId();

	return (
		<form
			className="grid gap-6"
			onSubmit={(event) => {
				event.preventDefault();
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
				<Label htmlFor={messageId}>Why NorthPole Capital?</Label>
				<Textarea
					id={messageId}
					name="message"
					placeholder="Tell us about your background and interests..."
					rows={5}
					required
				/>
			</div>
			<Button type="submit" size="lg" className="w-full sm:w-auto">
				Submit application
			</Button>
		</form>
	);
}
