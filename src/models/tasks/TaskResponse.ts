import { CoverCodeColor } from "../colors/CoverCodeColor";
import { TodolistResponse } from "../todolist/TodolistResponse";

export interface TaskResponse {
    id: number
    topic: string
    description: string
    coverCodeColor: CoverCodeColor
    isPublic: boolean
    progress: number
    scaleProgress: string
    dueDate: Date
    todolist: TodolistResponse[]
}

