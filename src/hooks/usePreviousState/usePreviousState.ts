import { useEffect, useRef } from 'react'

export function usePreviousState<K>(
  state: K,
  onChanged?: (nextState: K) => void,
) {
  const prevStateRef = useRef<K>(state)
  const callbackRef = useRef<undefined | ((nextState: K) => void)>(onChanged)
  useEffect(() => {
    callbackRef.current = onChanged
  }, [onChanged])
  useEffect(() => {
    if (prevStateRef.current !== state) {
      if (onChanged) {
        onChanged(state)
      }
    }
    prevStateRef.current = state
  }, [state])

  return prevStateRef
}
