import { cookies } from 'next/headers';
import { NextResponse, type NextRequest } from 'next/server'
import { PROTECTED_ROUTES, PUBLIC_ROUTES } from './lib/routes';
import { decrypt } from './lib/session';

const privateRoutes = [PROTECTED_ROUTES.HOME, PROTECTED_ROUTES.ADD_PASSWORD, PROTECTED_ROUTES.EDIT_PASSWORD]
const publicRoutes = [PUBLIC_ROUTES.AUTH]

export async function middleware(request: NextRequest) {
	const path = request.nextUrl.pathname
	const isProtectedRoute = privateRoutes.includes(path)
	const isPublicRoute = publicRoutes.includes(path)

	const cookie = cookies().get('session')?.value
	const session = await decrypt(cookie)

	if (isProtectedRoute && !session?.userId) {
		return NextResponse.redirect(new URL(PUBLIC_ROUTES.AUTH, request.nextUrl))
	}

	if (isPublicRoute && session?.userId) {
		return NextResponse.redirect(new URL(PROTECTED_ROUTES.HOME, request.nextUrl))
	}

	return NextResponse.next()

}

// export const config = {
// 	matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
// }