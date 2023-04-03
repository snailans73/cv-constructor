import { useEffect, useState } from "react"
import useDebounce from "./useDebounce"

export default function useResolutionSupported() {
  const [isSupported, setSupported] = useState<boolean>(window.innerHeight > 400 && window.innerWidth > 800 && window.innerHeight < window.innerWidth)
  const debouncedValue = useDebounce<boolean>(isSupported, 300)  

  useEffect(() => {
    const handleResize = () => {
      setSupported(window.innerHeight > 400 && window.innerWidth > 800 && window.innerHeight < window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return window.addEventListener('resize', handleResize)
  }, [])

  return debouncedValue
}