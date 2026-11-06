import { useState } from 'react';

import UserProfile from '../../components/UserProfile';
import TaskFilter from '../../components/TaskFilter';
import TaskItem from '../../components/TaskItem';
import { useTasks } from '../../hooks/useTasks';
import { filterTasks } from '../../utils/filterTasks';

export default function StudentWork() {
  const { tasks, loading } = useTasks();
  const [filter, setFilter] = useState('all');

  const visibleTasks = filterTasks(tasks, filter);

  if (loading) {
    return <p>Loading tasks...</p>;
  }

  return (
    <div>
      <UserProfile name="Student" />

      <TaskFilter currentFilter={filter} onFilterChange={setFilter} />

      <ul>
        {visibleTasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            completed={task.completed}
          />
        ))}
      </ul>
    </div>
  );
}
