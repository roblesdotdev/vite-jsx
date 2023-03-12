import { useState } from 'react'

export function useFoo() {
  const [state, setState] = useState()

  return {
    state,
    setState,
  }
}
