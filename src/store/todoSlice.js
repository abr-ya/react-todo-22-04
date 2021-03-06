import { createSlice } from '@reduxjs/toolkit';

const initialTodoes = [
  { id: '1', title: 'Проснуться!', completed: false },
  { id: '2', title: 'Позавтракать', completed: false },
  { id: '3', title: 'Сходить на работу', completed: false },
];

const todoSlice = createSlice({
  name: 'todos',
  initialState: initialTodoes,
  reducers: {
    addTodo(state, action) {
      state.push({
        id: new Date().toISOString(),
        title: action.payload,
        completed: false,
      });
    },
    toggleTodo(state, action) {
      // console.log(state, action);
      state.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        if (el.id === action.payload) el.completed = !el.completed;
      });
    },
    deleteTodo(state, action) {
      // console.log(state, action);
      return state.filter((el) => el.id !== action.payload); // можно было написать state = ...
    },
  },
});

export const { addTodo, toggleTodo, deleteTodo } = todoSlice.actions;

export default todoSlice.reducer;
