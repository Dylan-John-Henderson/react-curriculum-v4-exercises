// TOPIC: Correct useRef usage to control DOM elements
import { useRef } from 'react';

// TASK: Implement focusing an input field when the button is clicked.
export default function FillRefFocus() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current.focus();
  }

  return (
    <div>
      <h2>useRef: Focusing an Input</h2>

      <input ref={inputRef} type="text" placeholder="Type here..." />

      <button onClick={focusInput}>Focus Input</button>
    </div>
  );
}

// I created a ref with useRef(null) and attached it to the
// input using the ref prop. React sets inputRef.current to the real DOM
// element, so focusInput can call inputRef.current.focus(). Clicking the
// button now puts the cursor in the input.
