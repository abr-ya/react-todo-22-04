import { createSlice } from '@reduxjs/toolkit';

const initialTodoes = [
  { id: '1', title: 'Проснуться!', completed: false },
  { id: '2', title: 'Позавтракать', completed: false },
  { id: '3', title: 'Сходить на работу', completed: false },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: initialTodoes,
  },
  reducers: {
    addTodo(state, action) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action) {
      console.log(state, action);
    },
    removeTodo(state, action) {
      console.log(state, action);
    },
  },
});

export const { addTodo, toggleComplete, removeTodo } = todoSlice.actions;

export default todoSlice.reducer;
