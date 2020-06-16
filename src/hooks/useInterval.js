import { useEffect, useRef } from 'react'

function useInterval(callback, delay) {
  const savedCallback = useRef()

  useEffect(() => {
    savedCallback.current = callback
  }, [callback])

  useEffect(() => {
    let id = null

    function tick() {
      savedCallback.current()
    }
    if (delay !== null) {
      id = setInterval(tick, delay)
    }

    return () => clearInterval(id)
  })
}

export default useInterval
