// Plain JavaScript helper — no React code.
// Returns the tasks that match the given filter value.
export function filterTasks(tasks, filter) {
  if (filter === 'completed') {
    return tasks.filter((task) => task.completed);
  }
  if (filter === 'pending') {
    return tasks.filter((task) => !task.completed);
  }
  return tasks;
}
