import React, { useEffect, useRef } from 'react';
import { Recoverable } from 'repl';

function FocusInput() {

  const inputRef = useRef(null)

  useEffect(() => {
    //focus the input element
    inputRef.current.focus() // current property to the dom node
  }, [])

  return (
    <div>
      <input ref={inputRef} type="text" />
    </div>
  );
}

export default FocusInput
