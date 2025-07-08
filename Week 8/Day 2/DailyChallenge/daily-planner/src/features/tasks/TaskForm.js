import React, { useState } from 'react';

const TaskForm = ({ initialText = '', onSave, onCancel }) => {
  const [text, setText] = useState(initialText);
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!text.trim()) {
      setError('Task cannot be empty');
      return;
    }
    onSave(text.trim());
    setText('');
    setError('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter task"
      />
      <button type="submit">Save</button>
      {onCancel && <button type="button" onClick={onCancel}>Cancel</button>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
    </form>
  );
};

export default TaskForm; 