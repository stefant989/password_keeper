'use client'

import { Button } from "@/components/ui/button"
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useFormState } from "react-dom"
import SubmitButton from "../SubmitButton/SubmitButton"

export function RegisterForm({ actionProp }: {
	actionProp?: any
}) {
	const [error, action] = useFormState(actionProp, {})
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-xl">Sign Up</CardTitle>
				<CardDescription>
					Enter your information to create an account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={action} className="grid gap-4">
					<div className="grid grid-cols-2 gap-4">
						<div className="grid gap-2">
							<Label htmlFor="first-name">First name</Label>
							<Input id="first-name" name="firstName" placeholder="Max" required />
						</div>
						<div className="grid gap-2">
							<Label htmlFor="last-name">Last name</Label>
							<Input id="last-name" name="lastName" placeholder="Robinson" required />
						</div>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="m@example.com"
							required
						/>
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input id="password" name="password" type="password" />
					</div>
					<SubmitButton
						pendingLabel="Creating..."
						label="Create an account"
					/>
				</form>
			</CardContent>
		</Card>
	)
}
