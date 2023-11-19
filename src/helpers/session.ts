import { getSession, signOut } from 'next-auth/react'
import { SESSION_KEY_SESSION_USER, setSessionStorage } from './storage'
import { ROUTERS } from '@/const/router'

export const saveSession = async () => {
  try {
    const session = await getSession()
    const user = session?.user
    if (user) {
      setSessionStorage(SESSION_KEY_SESSION_USER, user)
    }
    return user
  } catch (error) {
    await sessionSignOut()
  }
  return
}

export const sessionSignOut = async () => {
  await signOut({
    callbackUrl: process.env.AUTH_TRUSTED_HOST + ROUTERS.AUTH.children.LOGIN,
  })
  window.localStorage.clear()
  window.sessionStorage.clear()
}
