import { ErrorBoundary } from '@/components/ui/ErrorBoundary'

export default function ExploreError({
  error,
  reset,
}: {
  error: Error
  reset: () => void
}) {
  return <ErrorBoundary error={error} reset={reset} />
}
