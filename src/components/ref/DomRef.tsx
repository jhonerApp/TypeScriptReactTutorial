import { useRef, useEffect } from 'react'

export const DomRef = () => {
  const inputRef = useRef<HTMLInputElement>(null!)
 //! allows ti call focus without optional chaining

  //<HTMLInputElement>(null!)
  useEffect(() => {
    inputRef.current.focus()
  }, [])
  return (
    <div>
      <input type='text' ref={inputRef} />
    </div>
  )
}