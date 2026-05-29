import { useNavigate } from 'react-router-dom'

type Props = {
  errorMessage?: string
  onRetry: () => void
}

export default function ErrorFallback({ errorMessage, onRetry }: Props) {
  const navigate = useNavigate()

  return (
    <div className="flex min-h-[60vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-lg rounded-xl border border-accent-silver/10 bg-secondary p-8 shadow-[4px_0_24px_rgba(0,0,0,0.4)]">
        <div className="flex flex-col items-center text-center">

          {/* Icon */}
          <div className="mb-4 w-12 h-12 bg-bg-tertiary flex items-center justify-center rounded-xl border border-accent-silver/20 shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)]">
            <span className="material-symbols-outlined text-rag-red text-[24px] glow-red fill-1">
              error
            </span>
          </div>

          {/* Title */}
          <h1 className="text-[16px] font-black tracking-tighter text-primary italic uppercase">
            Something went wrong
          </h1>

          {/* Subtitle */}
          <p className="mt-3 text-[11px] font-bold tracking-[0.15em] uppercase text-secondary leading-6">
            An unexpected error occurred. Retry the action or return to the dashboard.
          </p>

          {/* Dev error message */}
          {import.meta.env.DEV && errorMessage && (
            <pre className="mt-6 max-h-64 w-full overflow-auto rounded-lg border border-rag-red/20 bg-bg-tertiary p-4 text-left text-[11px] text-rag-red">
              {errorMessage}
            </pre>
          )}

          {/* Actions */}
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button
              onClick={onRetry}
              className="px-5 py-2.5 rounded-lg bg-rag-red/10 border border-rag-red/30 text-[11px] font-bold tracking-[0.15em] uppercase text-silver-bright hover:bg-rag-red/25 transition-colors duration-300"
            >
              Retry
            </button>
            <button
              onClick={() => navigate('/')}
              className="px-5 py-2.5 rounded-lg border border-accent-silver/20 bg-charcoal-dark text-[11px] font-bold tracking-[0.15em] uppercase text-secondary hover:text-primary hover:bg-accent-silver/5 transition-colors duration-300"
            >
              Go Home
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}
