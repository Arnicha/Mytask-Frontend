import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalTaskDetailModel } from '../../models/modals/ModalTaskDetailModel'
import { TaskResponse } from '../../models/tasks/TaskResponse'
import { RootState } from '../app/store'

const initialState: ModalTaskDetailModel = {
  isShowMadalTaskDetail: false,
  taskDeatil: undefined
}

export const modalTaskdetailSlice = createSlice({
  name: 'modalTaskdetail',
  initialState,
  reducers: {
    setTaskDetail: (state, action: PayloadAction<TaskResponse>) => {
      state.isShowMadalTaskDetail = true
      state.taskDeatil = action.payload
    },
  },
})
export default modalTaskdetailSlice.reducer

export const {
  setTaskDetail,
} = modalTaskdetailSlice.actions

export const getModalTaskdetail = (state: RootState) => state.modalTaskdetail