import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalUpdateTaskModel } from '../../models/modals/ModalUpdateTaskModel'
import { TaskResponse } from '../../models/tasks/TaskResponse'
import { RootState } from '../app/store'

const initialState: ModalUpdateTaskModel = {
  isShowMadalUpdateTask: false,
  taskDeatil: undefined
}

export const modalUpdateTaskSlice = createSlice({
  name: 'modalUpdateTask',
  initialState,
  reducers: {
    setDataUpdateTask: (state, action: PayloadAction<TaskResponse>) => {
      state.isShowMadalUpdateTask = true
      state.taskDeatil = action.payload
    },
  },
})
export default modalUpdateTaskSlice.reducer

export const {
  setDataUpdateTask,
} = modalUpdateTaskSlice.actions

export const getModalUpdateTask = (state: RootState) => state.modalUpdateTask