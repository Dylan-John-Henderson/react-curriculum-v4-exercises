export default function Child({ onIncrement }) {
  return <button onClick={onIncrement}>Increment Counter</button>;
}

// Child owns no state. It receives onIncrement from Parent and calls it when
// the button is clicked, which is how a child updates its parent.
