'use server'

import { db } from "@/db/db"
import { revalidatePath } from "next/cache"
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

	if (result.success === false) {
		return result.error.formErrors.fieldErrors
	}

	const values = result.data
	await db.password.create({
		data: {
			...values
		}
	})

	redirect('/')
}

export const updatePassword = async (id: string, prevState: unknown, formData: FormData) => {
	const result = updatePasswordSchema.safeParse(Object.fromEntries(formData.entries()))

	if (result.success === false) {
		return result.error.formErrors.fieldErrors
	}

	const values = result.data

	const password = await db.password.findUnique({ where: { id: parseInt(id) } })

	if (!password) return notFound()

	await db.password.update({
		where: { id: parseInt(id) },
		data: {
			...values
		}
	})

	redirect('/')
}

export const deletePassword = async (id: number) => {
	await db.password.delete({ where: { id } })
	revalidatePath('/')
}