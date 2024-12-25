import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { cookies } from 'next/headers'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { email, password } = body

    // Mock authentication - replace with real auth logic
    if (email === 'test@example.com' && password === 'password') {
      const cookieStore = await cookies()
      
      // Set auth cookie
      cookieStore.set('auth-token', 'mock-token', {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 60 * 60 * 24 * 7 // 1 week
      })

      return NextResponse.json({ 
        success: true,
        message: '登录成功'
      })
    }

    return NextResponse.json(
      { success: false, message: '邮箱或密码错误' },
      { status: 401 }
    )
  } catch (error) {
    return NextResponse.json(
      { success: false, message: '登录失败' },
      { status: 500 }
    )
  }
}
