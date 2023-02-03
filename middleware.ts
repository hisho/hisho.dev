import { NextRequest, NextResponse } from 'next/server'

/**
 * @see https://github.com/vercel/examples/blob/main/edge-middleware/basic-auth-password/middleware.ts
 */
export function middleware(req: NextRequest) {
  const basicAuth = req.headers.get('authorization')
  const url = req.nextUrl

  if (basicAuth) {
    const authValue = basicAuth.split(' ')[1]
    const [user, password] = atob(authValue ?? '').split(':')

    if (
      user === process.env['BASIC_AUTH_USERNAME'] &&
      password === process.env['BASIC_AUTH_PASSWORD']
    ) {
      return NextResponse.next()
    }
  }
  url.pathname = '/api/auth'

  return NextResponse.rewrite(url)
}
