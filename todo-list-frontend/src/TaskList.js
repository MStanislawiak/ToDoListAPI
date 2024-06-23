import React from 'react';

const TaskList = ({ tasks, onToggleTaskCompletion }) => {
  return (
    <ul>
      {tasks.map(task => (
        <li key={task.id} style={{ textDecoration: task.isComplete ? 'line-through' : 'none' }}>
          {task.title}
          <button onClick={() => onToggleTaskCompletion(task)}>
            {task.isComplete ? 'Delete' : 'Complete'}
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList;
