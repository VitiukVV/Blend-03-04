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
    editTodo: (state, { payload }) => {
      state.todosList = state.todosList.map((todo) =>
        todo.id !== payload.id ? todo : { ...todo, text: payload.text }
      );
    },
  },
});

export const { addTodos, deleteTodo, editTodo } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
