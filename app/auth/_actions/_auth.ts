'use server'

import { db } from "@/db/db"
import { createSession, deleteSession } from "@/lib/session"
import bcrypt from 'bcrypt'
import { z } from "zod"

const registerSchema = z.object({
	firstName: z.string().min(2),
	lastName: z.string().min(2),
	email: z.string().email().min(5),
	password: z.string().min(8)
})

const loginSchema = z.object({
	email: z.string().email().min(5),
	password: z.string().min(8)
})

export const register = async (prevState: unknown, formData: FormData) => {
	const result = registerSchema.safeParse(Object.fromEntries(formData.entries()))

	if (!result.success) {
		return result.error.formErrors.fieldErrors
	}

	const userData = result.data

	const hashedPassword = await bcrypt.hash(userData.password, 10)

	await db.user.create({
		data: {
			firstName: userData.firstName,
			lastName: userData.lastName,
			email: userData.email,
			password: hashedPassword
		}
	})

	const user = await db.user.findUnique({ where: { email: userData.email } })

	if (!user) {
		return 'Something went wrong! Please go to the login tab'
	}

	const userId = user.id.toString()

	await createSession(userId)
}

export const login = async (prevState: unknown, formData: FormData) => {
	const result = loginSchema.safeParse({
		email: formData.get('email'),
		password: formData.get('password')
	})

	if (!result.success) {
		return result.error.flatten().fieldErrors
	}

	const userLogin = result.data
	const user = await db.user.findUnique({ where: { email: userLogin.email } })

	if (!user) {
		return { message: 'Invalid login credencials' }
	}

	const passwordMatch = await bcrypt.compare(userLogin.password, user.password)

	if (!passwordMatch) {
		return { message: 'Password dont match!' }
	}

	const userId = user.id.toString()
	await createSession(userId)
}

export const logout = async () => {
	deleteSession()
}