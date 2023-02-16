import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query'
import { tasksApi } from '../../service/tasks/TaskApi';
import taskReducer from '../features/tasksSlice';
import todoReducer from '../features/todoSlice';
import modalTaskdetailReducer from '../features/modalTaskDetaileSlice'
import modalUpdateTaskReducer from '../features/modalUpdateTaskSlice'
import modalCreateTaskReducer from '../features/modalCreateTaskSlice'

const store = configureStore({
  reducer: {
    tasks: taskReducer,
    todos: todoReducer,
    modalTaskdetail: modalTaskdetailReducer,
    modalUpdateTask: modalUpdateTaskReducer,
    modalCreateTask: modalCreateTaskReducer,
    [tasksApi.reducerPath]: tasksApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({serializableCheck: false}).concat(tasksApi.middleware),
});

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
setupListeners(store.dispatch)