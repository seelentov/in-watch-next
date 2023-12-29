'use client'

import { useEffect, useState } from "react"

interface useToken{
  token: string
  setToken: (arg0: string) => void
  clearToken: () => void
}

export const useToken = (): useToken => {


  const [state, setState] = useState<string>(localStorage.getItem('token') || '')

  useEffect(() => {
    localStorage.setItem('token', state)
  }, [state])

  const setToken = (newToken: string) => {
    setState(newToken)
  }

  const clearToken = () => {
    localStorage.removeItem('token')
  }

  return {token: state, setToken, clearToken}
}