import {createSlice} from '@reduxjs/toolkit'

const initialState = {
    todosList: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
     
    },
  })
//   const {} = todoSlice.actions
  export const todoReducer = todoSlice.reducer;