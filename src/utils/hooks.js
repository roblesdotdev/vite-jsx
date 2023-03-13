import { useCallback, useEffect, useState } from 'react'
import { fetcher } from './api-fetcher'

function getInitialValue(key, defaultValue, convertFromString) {
  const localStorageValue = localStorage.getItem(key)
  if (localStorageValue) {
    try {
      return convertFromString(localStorageValue)
    } catch {
      localStorage.removeItem(key)
    }
  }
  return typeof defaultValue === 'function' ? defaultValue() : defaultValue
}

function useLocalStorageState(
  key,
  defaultValue = '',
  { convertToString = JSON.stringify, convertFromString = JSON.parse } = {},
) {
  const [state, setState] = useState(() =>
    getInitialValue(key, defaultValue, convertFromString),
  )

  useEffect(() => {
    localStorage.setItem(key, convertToString(state))
  }, [key, state, convertToString])

  return [state, setState]
}

function useClient() {
  return useCallback((endpoint, config) => fetcher(endpoint, { ...config }), [])
}

export { useLocalStorageState, useClient }
