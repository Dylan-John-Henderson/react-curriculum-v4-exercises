import { useState } from 'react';
import Child from './Child';

export default function Parent() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>Parent-Child Communication</h2>
      <p>Counter: {count}</p>
      <Child onIncrement={increment} />
    </div>
  );
}

// The state and the increment helper live in Parent, but Child had no way to
// reach them. I passed increment down as a callback prop (onIncrement) so
// Child can trigger a state update in Parent.
