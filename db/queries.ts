import { cookies } from "next/headers"
import { db } from "./db"
import { decrypt } from "@/lib/session"
import { redirect } from "next/navigation"
import { PUBLIC_ROUTES } from "@/lib/routes"

const getUserId = async () => {
	const cookie = cookies().get('session')?.value
	const session = await decrypt(cookie)
	if (!session?.userId) redirect(PUBLIC_ROUTES.AUTH)
	return session.userId
}

export const getPasswordData = async () => {
	const userId = await getUserId()
	const passwords = await db.password.findMany({ where: { userId: Number(userId) } })
	return passwords
}

export const getPasswordCount = async () => {
	const userId = await getUserId()
	const total = await db.password.count({ where: { userId: Number(userId) } })
	return total
}

export const getCurrentUser = async () => {
	const userId = await getUserId()
	const user = await db.user.findUnique({ where: { id: Number(userId) } })
	return user
}