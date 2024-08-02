'use server'

import { db } from "@/db/db"
import { decrypt } from "@/lib/session"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"
import { notFound, redirect } from "next/navigation"
import { z } from 'zod'

const passwordSchema = z.object({
	url: z.string().min(3),
	username: z.string().min(1),
	email: z.string().min(1),
	password: z.string().min(3),
})

const updatePasswordSchema = passwordSchema.partial()

export const addPassword = async (prevState: unknown, formData: FormData) => {
	const result = passwordSchema.safeParse(Object.fromEntries(formData.entries()))

	const cookie = cookies().get('session')?.value
	const session = await decrypt(cookie)

	if (!session?.userId) {
		return 'userID does not exist in the session token'
	}

	if (result.success === false) {
		return result.error.formErrors.fieldErrors
	}

	const values = result.data
	await db.password.create({
		data: {
			...values,
			userId: Number(session.userId)
		}
	})

	redirect('/')
}

export const updatePassword = async (id: string, prevState: unknown, formData: FormData) => {
	const result = updatePasswordSchema.safeParse(Object.fromEntries(formData.entries()))
	const cookie = cookies().get('session')?.value
	const session = await decrypt(cookie)
	if (result.success === false) {
		return result.error.formErrors.fieldErrors
	}

	if (!session?.userId) {
		return 'userID does not exist in the session token'
	}

	const values = result.data

	const password = await db.password.findUnique({ where: { id: parseInt(id) } })

	if (!password) return notFound()

	await db.password.update({
		where: { id: parseInt(id) },
		data: {
			...values,
			userId: Number(session.userId)
		}
	})

	redirect('/')
}

export const deletePassword = async (id: number) => {
	await db.password.delete({ where: { id } })
	revalidatePath('/')
}