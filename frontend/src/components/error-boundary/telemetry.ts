import type { SanitizedError } from './sanitizeError'

export function captureError(error: SanitizedError) {
  if (import.meta.env.DEV) {
    console.error('Captured frontend error:', error)
  }

  // future telemetry integrations
}