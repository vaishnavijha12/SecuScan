import { useNavigate } from 'react-router-dom'

type Props = {
  error?: Error
  onRetry: () => void
}

export default function ErrorFallback({ error, onRetry }: Props) {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-4 p-6 text-center">
      <h1 className="text-3xl font-bold text-red-500">
        Something went wrong
      </h1>

      <p className="max-w-md text-gray-400">
        An unexpected frontend error occurred.
      </p>

      {import.meta.env.DEV && error && (
        <pre className="max-w-2xl overflow-auto rounded bg-black p-4 text-left text-sm text-red-400">
          {error.message}
        </pre>
      )}

      <div className="flex gap-4">
        <button
          onClick={onRetry}
          className="rounded bg-red-600 px-4 py-2 text-white transition hover:bg-red-700"
        >
          Retry
        </button>

        <button
          onClick={() => navigate('/')}
          className="rounded border border-gray-600 px-4 py-2 text-white transition hover:bg-gray-800"
        >
          Go Home
        </button>
      </div>
    </div>
  )
}