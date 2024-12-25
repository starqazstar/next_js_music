import { AuthForm } from '@/components/auth/AuthForm'

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold">注册</h2>
          <p className="mt-2 text-sm text-gray-400">
            已有账号？{' '}
            <a href="/auth/login" className="text-white hover:text-gray-200">
              立即登录
            </a>
          </p>
        </div>
        <AuthForm mode="register" />
      </div>
    </div>
  )
}
