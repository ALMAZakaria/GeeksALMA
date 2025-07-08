import React from 'react';

const TaskList = ({ tasks, onEdit, onDelete, onToggle }) => {
  if (!tasks || tasks.length === 0) {
    return <div>No tasks for this day.</div>;
  }
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          <span onClick={() => onToggle(task.id)} style={{ cursor: 'pointer' }}>{task.text}</span>
          <button onClick={() => onEdit(task.id)}>Edit</button>
          <button onClick={() => onDelete(task.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default TaskList; 