'use client'
import { ROUTES } from '@/lib/routes'
import { LogOutIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React from 'react'

const Nav = () => {
	const router = useRouter()
	return (
		<nav className='flex justify-between px-10 py-5 shadow-lg'>
			<h2 className='cursor-pointer' onClick={() => router.push(ROUTES.HOME)}>Password keeper</h2>
			<LogOutIcon className='cursor-pointer' onClick={() => router.push(ROUTES.AUTH)} />
		</nav>
	)
}

export default Nav