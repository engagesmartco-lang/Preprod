import { useState } from 'react'

interface UseWaitlistReturn {
  email: string
  setEmail: (email: string) => void
  isLoading: boolean
  isSuccess: boolean
  error: string | null
  submitWaitlist: (email: string, source?: string) => Promise<void>
  reset: () => void
}

export const useWaitlist = (): UseWaitlistReturn => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submitWaitlist = async (email: string, source: string = 'website') => {
    setIsLoading(true)
    setError(null)
    setIsSuccess(false)

    try {
      const response = await fetch('/api/waitlist', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, source }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Failed to join waitlist')
      }

      setIsSuccess(true)
      setEmail('')
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  const reset = () => {
    setEmail('')
    setIsLoading(false)
    setIsSuccess(false)
    setError(null)
  }

  return {
    email,
    setEmail,
    isLoading,
    isSuccess,
    error,
    submitWaitlist,
    reset,
  }
}
