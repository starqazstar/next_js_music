'use client'

interface ErrorBoundaryProps {
  error: Error
  reset: () => void
}

export function ErrorBoundary({ error, reset }: ErrorBoundaryProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
      <h2 className="text-xl font-semibold">出错了</h2>
      <p className="text-gray-400">{error.message}</p>
      <button
        onClick={reset}
        className="px-4 py-2 text-sm font-medium text-white bg-white/10 rounded-full hover:bg-white/20"
      >
        重试
      </button>
    </div>
  )
}
