'use client'
import React, { useTransition } from 'react'
import { useRouter } from 'next/navigation'
import Link from "next/link"
import { ROUTES } from "@/lib/routes"
import { MoreVertical } from "lucide-react"
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuSeparator,
	DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { deletePassword } from '@/app/password/_actions/_password'

const DropdownList = ({ id }: { id: number }) => {
	const [isPending, startTransition] = useTransition()
	const router = useRouter()
	return (
		<DropdownMenu>
			<DropdownMenuTrigger><MoreVertical /></DropdownMenuTrigger>
			<DropdownMenuContent>
				<DropdownMenuItem><Link href={`${ROUTES.EDIT_PASSWORD}/${id}`}>Edit</Link></DropdownMenuItem>
				<DropdownMenuSeparator />
				<DropdownMenuItem
					disabled={isPending}
					onClick={() => {
						startTransition(async () => {
							await deletePassword(id)
							router.refresh()
						})
					}}
				>Delete</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	)
}

export default DropdownList