// TOPIC: Choose the correct tool: useRef vs useState
import { useState } from 'react';

// TASK: Make sure it updates the text *without* triggering a re-render
export default function FindCorrectHook() {
  const [clickCount, setClickCount] = useState(0);

  function handleClick() {
    setClickCount((c) => c + 1);
  }

  return (
    <div>
      <h2>useRef vs useState Decision</h2>
      <button onClick={handleClick}>{clickCount} Clicks</button>
    </div>
  );
}

// The original clickCount was a plain variable, so it reset on every render
// and changing it never updated the UI. Because the count is displayed on
// screen, it should be state. useState stores the value and tells React to
// re-render when it changes. useRef would change the value without updating
// the UI, so it's the wrong tool here.
