'use client'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import Link from 'next/link'
import { PROTECTED_ROUTES } from '@/lib/routes'
import { ArrowLeft } from 'lucide-react'
import { PasswordFormProps } from '@/lib/types'
import SubmitButton from '../SubmitButton/SubmitButton'
import { useFormState } from 'react-dom'

const PasswordForm = ({ password, actionProp }: {
	password?: PasswordFormProps | null,
	actionProp?: any
}) => {
	const [error, action] = useFormState(actionProp, {
		url: '',
		email: '',
		username: '',
		password: ''
	})
	return (
		<Card className="mx-auto max-w-sm">
			<CardHeader>
				<Link href={PROTECTED_ROUTES.HOME} className='mb-5 flex'><ArrowLeft className='mr-2' /> Go Back</Link>
				<CardTitle className="text-2xl">Password</CardTitle>
				<CardDescription>
					Enter your password
				</CardDescription>
			</CardHeader>
			<CardContent>
				<form action={action} className="grid gap-4">
					<div className="grid gap-2">
						<Label htmlFor="url">Url</Label>
						<Input
							id="url"
							type="text"
							name="url"
							placeholder="example.com"
							required
							defaultValue={password?.url || ''}
						/>
						{error.url && <div className='text-destructive'>{error.url}</div>}
					</div>
					<div className="grid gap-2">
						<Label htmlFor="email">Email</Label>
						<Input
							id="email"
							type="email"
							name="email"
							placeholder="test@example.com"
							required
							defaultValue={password?.email || ''}
						/>
						{error.email && <div className='text-destructive'>{error.email}</div>}
					</div>
					<div className="grid gap-2">
						<Label htmlFor="username">Username</Label>
						<Input
							id="username"
							type="text"
							name="username"
							placeholder="test"
							required
							defaultValue={password?.username || ''}
						/>
						{error.username && <div className='text-destructive'>{error.username}</div>}
					</div>
					<div className="grid gap-2">
						<Label htmlFor="password">Password</Label>
						<Input
							id="password"
							type="text"
							name="password"
							required
							defaultValue={password?.password || ''}
						/>
						{error.password && <div className='text-destructive'>{error.password}</div>}
					</div>
					<SubmitButton
						pendingLabel='Saving...'
						label='Save'
					/>
				</form>
			</CardContent>
		</Card>
	)
}

export default PasswordForm