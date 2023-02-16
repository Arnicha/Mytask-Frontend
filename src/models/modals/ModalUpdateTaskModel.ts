import { TaskResponse } from "../tasks/TaskResponse"

export interface ModalUpdateTaskModel {
    isShowMadalUpdateTask: boolean
    taskDeatil: TaskResponse | undefined
}