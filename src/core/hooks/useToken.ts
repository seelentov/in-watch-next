'use client'

import { useEffect, useState } from "react"

interface useToken{
  token: string
  setToken: (arg0: string) => void
}

export const useToken = (): useToken => {


  const [state, setState] = useState<string>(localStorage.getItem('token') || '')

  useEffect(() => {
    localStorage.setItem('token', state)
  }, [state])

  const setToken = (newToken: string) => {
    setState(newToken)
  }

  return {token: state, setToken}
}