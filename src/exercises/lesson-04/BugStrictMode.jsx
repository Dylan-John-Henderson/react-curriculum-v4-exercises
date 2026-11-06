// TOPIC: StrictMode Effects and Cleanup
// TASK: Notice how the count increments incorrectly based on the `setInterval` logic. Fix the useEffect so that the counter increments correctly.

import { useEffect, useState } from 'react';

export default function BugStrictMode() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <h2>StrictMode Timer Bug</h2>
      <p>Count: {count}</p>
    </div>
  );
}

// StrictMode mounts the component, runs the effect, cleans it up, and runs it
// again. Since the original effect had no cleanup, the first interval kept
// running, so two intervals were incrementing the count and it went up by 2.
//
// Fix:
// I saved the ID that setInterval returns in a variable, then returned a
// cleanup function from useEffect that passes that ID to clearInterval.
// React now stops the old timer before starting a new one, so only one
// interval runs at a time and the count goes up by 1 each second.
