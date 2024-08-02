'use client'
import { logout } from '@/app/auth/_actions/_auth'
import { PROTECTED_ROUTES } from '@/lib/routes'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useTransition } from 'react'

const Nav = () => {
	const router = useRouter()
	const [pending, startTransition] = useTransition()
	return (
		<nav className='flex justify-between px-10 py-5 shadow-lg'>
			<h2 className='cursor-pointer' onClick={() => router.push(PROTECTED_ROUTES.HOME)}>Password keeper</h2>
			<LogOutIcon className='cursor-pointer' type='submit' onClick={() => {
				startTransition(async () => await logout())
			}} />
		</nav>
	)
}

export default Nav