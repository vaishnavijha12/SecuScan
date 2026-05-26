const SENSITIVE_PATTERNS = [
  /token=[^&\s]+/gi,
  /apikey=[^&\s]+/gi,
  /password=[^&\s]+/gi,
  /authorization:\s*bearer\s+[^\s]+/gi,
]

export type SanitizedError = {
  message: string
  stack?: string
}

export function sanitizeError(error: Error): SanitizedError {
  let sanitizedStack = error.stack || ''

  SENSITIVE_PATTERNS.forEach((pattern) => {
    sanitizedStack = sanitizedStack.replace(pattern, '[REDACTED]')
  })

  return {
    message: error.message,
    stack: sanitizedStack,
  }
}
