import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import DayPicker from './features/tasks/DayPicker';
import TaskList from './features/tasks/TaskList';
import TaskForm from './features/tasks/TaskForm';
import {
  addTask,
  editTask,
  deleteTask,
  toggleTask,
} from './features/tasks/tasksSlice';
import './App.css';

function getToday() {
  return new Date().toISOString().slice(0, 10);
}

function App() {
  const [selectedDay, setSelectedDay] = useState(getToday());
  const [editingId, setEditingId] = useState(null);
  const [editingText, setEditingText] = useState('');
  const tasks = useSelector((state) => state.tasks[selectedDay] || []);
  const dispatch = useDispatch();

  const handleAddTask = (text) => {
    dispatch(addTask(selectedDay, text));
  };

  const handleEditTask = (id) => {
    const task = tasks.find((t) => t.id === id);
    setEditingId(id);
    setEditingText(task ? task.text : '');
  };

  const handleSaveEdit = (text) => {
    dispatch(editTask({ day: selectedDay, id: editingId, text }));
    setEditingId(null);
    setEditingText('');
  };

  const handleDeleteTask = (id) => {
    dispatch(deleteTask({ day: selectedDay, id }));
  };

  const handleToggleTask = (id) => {
    dispatch(toggleTask({ day: selectedDay, id }));
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Daily Planner</h1>
        <DayPicker selectedDay={selectedDay} onChange={setSelectedDay} />
        <h2>Tasks for {selectedDay}</h2>
        <TaskForm onSave={handleAddTask} />
        <TaskList
          tasks={tasks}
          onEdit={handleEditTask}
          onDelete={handleDeleteTask}
          onToggle={handleToggleTask}
        />
        {editingId && (
          <div className="modal">
            <TaskForm
              initialText={editingText}
              onSave={handleSaveEdit}
              onCancel={() => setEditingId(null)}
            />
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
