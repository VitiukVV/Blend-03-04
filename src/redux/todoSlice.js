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
  },
});
export const { addTodos } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;
