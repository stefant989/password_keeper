import { cookies } from "next/headers"
import { db } from "./db"
import { decrypt } from "@/lib/session"

export const getPasswordData = async () => await db.password.findMany()

export const getPasswordCount = async () => await db.password.count()

export const getCurrentUser = async () => {
	const cookie = cookies().get('session')?.value
	const session = await decrypt(cookie)

	if (!session?.userId) {
		return {
			firstName: '',
			lastName: '',
			email: ''
		}
	}
	const user = await db.user.findUnique({ where: { id: Number(session.userId) } })
	return user
}