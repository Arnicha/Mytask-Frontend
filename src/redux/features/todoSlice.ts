import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../app/store'

type InitialState = {
  topic: Array<string>
}

const initialState: InitialState = {
  topic: []
}

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<string>) => {
      state.topic.push(action.payload)
    },
    setComplete: (state, action: PayloadAction<Array<string>>) => {
      state.topic = action.payload
    },
  },
})
export default todoSlice.reducer

export const {
  addItem,
  setComplete,
} = todoSlice.actions

export const getTodos = (state: RootState) => state.todos.topic