import { TodoList } from './todo.js';

const todoList = new TodoList();

// Add some tasks
todoList.addTask('Buy groceries');
todoList.addTask('Call mom');
todoList.addTask('Finish homework');

// List all tasks
todoList.listTasks();

// Mark a task as complete
const firstTaskId = todoList.tasks[0].id;
todoList.markAsComplete(firstTaskId);

// List tasks again to see the changes
todoList.listTasks(); 