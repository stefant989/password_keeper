import { cookies } from 'next/headers'
import { jwtVerify, SignJWT } from "jose"
import { redirect } from "next/navigation"

const JWT_SECRET = process.env.JWT_SECRET || ''
const key = new TextEncoder().encode(JWT_SECRET);

export const createSession = async (userId: string) => {
	const expiresAt = new Date(Date.now() + 60 * 60 * 1000)
	const session = await encrypt({ userId, expiresAt })

	cookies().set('session', session, {
		httpOnly: true,
		secure: true,
		expires: expiresAt,
		sameSite: 'lax',
		path: '/'
	})

	redirect('/')
}

export const encrypt = async (payload: any) => {
	return new SignJWT(payload)
		.setProtectedHeader({ alg: 'HS256' })
		.setIssuedAt()
		.setExpirationTime('1h')
		.sign(key)
}

export const decrypt = async (session: string | undefined = '') => {
	try {
		const { payload } = await jwtVerify(session, key, {
			algorithms: ['HS256']
		})
		return payload
	} catch (err) {
		return null
	}
}

export const veridySession = async () => {
	const cookie = cookies().get('session')?.value
	const session = await decrypt(cookie)

	if (!session?.userId) {
		redirect('/auth')
	}

	return { isAuth: true, userId: Number(session.userId) }
}

export const deleteSession = () => {
	cookies().delete('session')
	redirect('/auth')
}