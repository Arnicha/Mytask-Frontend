import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ModalCreateTaskModel } from '../../models/modals/ModalCreateTaskModel'
import { RootState } from '../app/store'

const initialState: ModalCreateTaskModel = {
  isShowMadalCreateTask: false
}

export const modalCreateTaskSlice = createSlice({
  name: 'modalCreateTask',
  initialState,
  reducers: {
    setIsShowModalCreateTask: (state, action: PayloadAction<boolean>) => {
      state.isShowMadalCreateTask = action.payload
    },
  },
})
export default modalCreateTaskSlice.reducer

export const {
  setIsShowModalCreateTask,
} = modalCreateTaskSlice.actions

export const getModalCreateTask = (state: RootState) => state.modalCreateTask