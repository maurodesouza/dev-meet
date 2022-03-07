import { useState, useCallback } from "react"

const useForceUpdate = () => {
  const [, updateState] = useState({})

  const forceUpdate = useCallback(() => updateState({}), []);

  return { forceUpdate }
}

export { useForceUpdate }
