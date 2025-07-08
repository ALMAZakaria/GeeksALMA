import React, { useRef, useState } from 'react';
import './App.css';
import { TaskProvider, useTasks } from './TaskContext';

function TaskInput() {
  const [text, setText] = useState('');
  const { dispatch } = useTasks();
  const handleAdd = (e) => {
    e.preventDefault();
    if (text.trim()) {
      dispatch({ type: 'ADD_TASK', text });
      setText('');
    }
  };
  return (
    <form onSubmit={handleAdd} style={{ marginBottom: 20 }}>
      <input
        value={text}
        onChange={e => setText(e.target.value)}
        placeholder="Add a task"
        style={{ padding: '8px', fontSize: '1rem', width: 250 }}
      />
      <button type="submit" style={{ marginLeft: 10, padding: '8px 16px' }}>Add</button>
    </form>
  );
}

function TaskList() {
  const { state, dispatch } = useTasks();
  const [editingId, setEditingId] = useState(null);
  const editRef = useRef();

  const filteredTasks = state.tasks.filter(task => {
    if (state.filter === 'completed') return task.completed;
    if (state.filter === 'active') return !task.completed;
    return true;
  });

  const handleEdit = (id, text) => {
    dispatch({ type: 'EDIT_TASK', id, text });
    setEditingId(null);
  };

  return (
    <ul style={{ listStyle: 'none', padding: 0 }}>
      {filteredTasks.map(task => (
        <li key={task.id} style={{ marginBottom: 10 }}>
          <input
            type="checkbox"
            checked={task.completed}
            onChange={() => dispatch({ type: 'TOGGLE_TASK', id: task.id })}
          />
          {editingId === task.id ? (
            <>
              <input
                ref={editRef}
                defaultValue={task.text}
                style={{ marginLeft: 10, padding: '4px', fontSize: '1rem' }}
              />
              <button
                onClick={() => handleEdit(task.id, editRef.current.value)}
                style={{ marginLeft: 5 }}
              >Save</button>
              <button onClick={() => setEditingId(null)} style={{ marginLeft: 5 }}>Cancel</button>
            </>
          ) : (
            <>
              <span
                style={{
                  marginLeft: 10,
                  textDecoration: task.completed ? 'line-through' : 'none',
                  color: task.completed ? '#888' : '#222',
                  fontSize: '1rem',
                  cursor: 'pointer'
                }}
              >
                {task.text}
              </span>
              <button onClick={() => setEditingId(task.id)} style={{ marginLeft: 10 }}>Edit</button>
            </>
          )}
        </li>
      ))}
    </ul>
  );
}

function TaskFilter() {
  const { state, dispatch } = useTasks();
  return (
    <div style={{ marginBottom: 20 }}>
      <button
        onClick={() => dispatch({ type: 'FILTER_TASKS', filter: 'all' })}
        style={{ marginRight: 10, fontWeight: state.filter === 'all' ? 'bold' : 'normal' }}
      >All</button>
      <button
        onClick={() => dispatch({ type: 'FILTER_TASKS', filter: 'active' })}
        style={{ marginRight: 10, fontWeight: state.filter === 'active' ? 'bold' : 'normal' }}
      >Active</button>
      <button
        onClick={() => dispatch({ type: 'FILTER_TASKS', filter: 'completed' })}
        style={{ fontWeight: state.filter === 'completed' ? 'bold' : 'normal' }}
      >Completed</button>
    </div>
  );
}

function TaskManager() {
  return (
    <div className="App">
      <h1>Task Manager</h1>
      <TaskInput />
      <TaskFilter />
      <TaskList />
    </div>
  );
}

function App() {
  return (
    <TaskProvider>
      <TaskManager />
    </TaskProvider>
  );
}

export default App;
