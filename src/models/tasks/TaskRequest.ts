import { TodolistRequest } from "../todolist/TodolistRequest";

export interface TaskRequest {
    topic: string;
    description: string;
    coverColorId: number;
    dueDate: string;
    todolist: Array<TodolistRequest>;
}