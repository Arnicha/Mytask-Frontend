import { TaskResponse } from "../tasks/TaskResponse"

export interface ModalTaskDetailModel {
    isShowMadalTaskDetail: boolean
    taskDeatil: TaskResponse | undefined
}