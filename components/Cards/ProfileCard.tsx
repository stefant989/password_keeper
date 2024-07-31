'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ProfileCardProps } from '@/lib/types';
import { Button } from '@/components/ui/button';
import { Separator } from "@/components/ui/separator"
import { ROUTES } from '@/lib/routes';


const ProfileCard = ({ firstName, lastName, email, count }: ProfileCardProps) => {
	const router = useRouter()
	return (
		<Card className='w-96 max-lg:w-full mb-10'>
			<CardHeader className='flex flex-row items-center'>
				<Avatar>
					<AvatarImage src="https://github.com/shadcn.png" />
					<AvatarFallback>{firstName.charAt(0)}{lastName.charAt(0)}</AvatarFallback>
				</Avatar>
				<div className='flex flex-col justify-center items-center ml-4'>
					<span className='text-sm'>{firstName} {lastName}</span>
					<span className='text-xs text-muted-foreground'>{email}</span>
				</div>
			</CardHeader>
			<Separator />
			<CardContent className='mt-4 flex justify-between items-center'>
				<span className='text-md'>Passwords:</span>
				<span className='text-md rounded-md border px-2 py-1'>{count}</span>
			</CardContent>
			<CardFooter className='flex justify-center'>
				<Button onClick={() => router.push(ROUTES.PROFILE)} variant="outline">View Profile</Button>
			</CardFooter>
		</Card>
	)
}

export default ProfileCard