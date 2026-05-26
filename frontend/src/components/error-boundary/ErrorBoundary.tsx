import React from 'react'
import ErrorFallback from './ErrorFallback'
import { sanitizeError } from './sanitizeError'
import { captureError } from './telemetry'

type Props = {
  children: React.ReactNode
}

type State = {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    hasError: false,
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
    }
  }

  componentDidCatch(error: Error) {
    const sanitized = sanitizeError(error)
    captureError(sanitized)
  }

  resetBoundary = () => {
    this.setState({
      hasError: false,
      error: undefined,
    })
  }

  render() {
    if (this.state.hasError) {
      return (
        <ErrorFallback
          error={this.state.error}
          onRetry={this.resetBoundary}
        />
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary