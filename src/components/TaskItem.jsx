export default function TaskItem({ title, completed }) {
  return (
    <li>
      {title} {completed ? '✅' : '⏳'}
    </li>
  );
}
