import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todosList: [],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodos: (state, { payload }) => {
      state.todosList.push(payload);
    },
    deleteTodo: (state, { payload }) => {
      state.todosList = state.todosList.filter((todo) => todo.id !== payload);
    },
  },
});
export const { addTodos, deleteTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
