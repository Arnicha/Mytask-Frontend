import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { TaskResponse } from '../../models/tasks/TaskResponse'
import { RootState } from '../app/store'

const initialState: TaskResponse = {
  id: 0,
  topic: '',
  description: '',
  dueDate: new Date(),
  coverCodeColor: {
    id: 1,
    codeColor: 'bg-[#A9D6A2]'
  },
  isPublic: false,
  progress: 0,
  scaleProgress: '',
  todolist: []
}

export const taskSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    getAllTasksById: (state, action: PayloadAction<TaskResponse>) => {
      state.id = action.payload.id
      state.topic = action.payload.topic
      state.description = action.payload.description
      state.dueDate = action.payload.dueDate
      state.coverCodeColor = action.payload.coverCodeColor
      state.isPublic = action.payload.isPublic
      state.progress = action.payload.progress
      state.scaleProgress = action.payload.scaleProgress
      state.todolist = action.payload.todolist
    },
  },
})
export default taskSlice.reducer

export const {
  getAllTasksById,
} = taskSlice.actions

export const getTasks = (state: RootState) => state.tasks