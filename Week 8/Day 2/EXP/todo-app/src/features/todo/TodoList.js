import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTodo, removeTodo } from './todoSlice';

export function TodoList() {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  if (todos.length === 0) {
    return <p>No todos yet!</p>;
  }

  return (
    <ul>
      {todos.map((todo) => (
        <li key={todo.id} style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
          <span onClick={() => dispatch(toggleTodo(todo.id))} style={{ cursor: 'pointer' }}>
            {todo.text}
          </span>
          <button onClick={() => dispatch(removeTodo(todo.id))} style={{ marginLeft: 8 }}>
            Remove
          </button>
        </li>
      ))}
    </ul>
  );
} 