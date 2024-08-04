'use client'
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

export function LoginForm({ actionProp }: {
	actionProp: (prevState: unknown, formData: FormData) => Promise<{ email?: string[] | undefined; password?: string[] | undefined; } | { message: string; } | undefined>
}) {
	const [error, action] = useFormState(actionProp, {})
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<CardTitle className="text-2xl">Login</CardTitle>
				<CardDescription>
					Enter your email below to login to your account
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={action} className="grid gap-4">
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
						<div className="flex items-center">
							<Label htmlFor="password">Password</Label>
						</div>
						<Input
							id="password"
							type="password"
							name="password"
							required
						/>
					</div>
					<SubmitButton
						pendingLabel="..."
						label="Sign up"
					/>
				</form>
			</CardContent>
		</Card>
	)
}
