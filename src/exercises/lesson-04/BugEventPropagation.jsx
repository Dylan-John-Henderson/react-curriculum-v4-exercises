// TOPIC: Event Bubbling & Stopping Propagation
// TASK: Ensure only the inner button's action triggers an alert when the button is pushed

export default function BugEventPropagation() {
  function handleOuterClick() {
    alert("RED BOX CLICKED ❌ Don't show me!");
  }

  function handleInnerClick(event) {
    event.stopPropagation();
    alert('Button Clicked ✅');
  }

  return (
    <>
      <h2>Stopping Event Propagation</h2>
      <div
        style={{ padding: 20, border: '2px solid red' }}
        onClick={handleOuterClick}
      >
        <button onClick={handleInnerClick}>Click inner button</button>
      </div>
    </>
  );
}

// Click events bubble: after the button's handler runs, the event travels up
// to its parent, so the red box's handler fired too and showed two alerts.
// I added event.stopPropagation() to the button's handler so the event stops
// there. Clicking inside the red box but outside the button still triggers
// the outer alert, since that click never passes through the button.
