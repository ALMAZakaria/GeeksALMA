import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask: {
      reducer(state, action) {
        const { day, task } = action.payload;
        if (!state[day]) state[day] = [];
        state[day].push(task);
      },
      prepare(day, text) {
        return {
          payload: {
            day,
            task: {
              id: nanoid(),
              text,
              completed: false,
            },
          },
        };
      },
    },
    editTask(state, action) {
      const { day, id, text } = action.payload;
      const tasks = state[day] || [];
      const task = tasks.find((t) => t.id === id);
      if (task) {
        task.text = text;
      }
    },
    deleteTask(state, action) {
      const { day, id } = action.payload;
      if (state[day]) {
        state[day] = state[day].filter((t) => t.id !== id);
      }
    },
    toggleTask(state, action) {
      const { day, id } = action.payload;
      const tasks = state[day] || [];
      const task = tasks.find((t) => t.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
  },
});

export const { addTask, editTask, deleteTask, toggleTask } = tasksSlice.actions;
export default tasksSlice.reducer; 