export const SESSION_KEY_SESSION_USER = 'sessionUser'

export const setSessionStorage = (key, value) => {
  try {
    sessionStorage &&
      sessionStorage.setItem(
        key,
        typeof value === 'object' ? JSON.stringify(value) : String(value),
      )
  } catch (error) {}
}

export const getSessionStorage = (key) => {
  try {
    const value = sessionStorage ? sessionStorage?.getItem(key) : ''
    return value ? JSON.parse(value) : ''
  } catch (error) {
    return ''
  }
}

export const removeSessionStorage = (key) => {
  try {
    sessionStorage && sessionStorage.removeItem(key)
  } catch (error) {}
}
