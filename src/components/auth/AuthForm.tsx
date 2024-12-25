'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

interface AuthFormProps {
  mode: 'login' | 'register'
}

export function AuthForm({ mode }: AuthFormProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState('')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    setError('')

    const formData = new FormData(e.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('password') as string

    try {
      // Mock auth logic - replace with real auth
      await new Promise(resolve => setTimeout(resolve, 1000))
      
      if (mode === 'login') {
        // Handle login
        console.log('Login:', { email, password })
      } else {
        // Handle register
        console.log('Register:', { email, password })
      }

      router.push('/')
    } catch (err) {
      setError('认证失败，请重试')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="space-y-4 rounded-md">
        <div>
          <label htmlFor="email" className="sr-only">
            邮箱
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white focus:z-10 focus:ring-2 focus:ring-white sm:text-sm sm:leading-6"
            placeholder="邮箱地址"
          />
        </div>
        <div>
          <label htmlFor="password" className="sr-only">
            密码
          </label>
          <input
            id="password"
            name="password"
            type="password"
            required
            className="relative block w-full rounded-lg border-0 bg-white/5 p-3 text-white focus:z-10 focus:ring-2 focus:ring-white sm:text-sm sm:leading-6"
            placeholder="密码"
          />
        </div>
      </div>

      {error && (
        <div className="text-red-500 text-sm text-center">{error}</div>
      )}

      <button
        type="submit"
        disabled={isLoading}
        className="relative flex w-full justify-center rounded-lg bg-white px-3 py-3 text-sm font-semibold text-black hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isLoading ? (
          <div className="w-5 h-5 border-2 border-black/20 border-t-black rounded-full animate-spin" />
        ) : (
          mode === 'login' ? '登录' : '注册'
        )}
      </button>
    </form>
  )
}
