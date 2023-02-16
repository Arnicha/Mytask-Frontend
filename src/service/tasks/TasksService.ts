import axios, { AxiosResponse } from "axios"
import { TaskRequest } from "../../models/tasks/TaskRequest"
import { TaskResponse } from "../../models/tasks/TaskResponse"
import Host from "../Host"

class TasksService {

    private readonly host: string = new Host().host

    public async createTask(taskBodyRequest: TaskRequest): Promise<TaskResponse> {
        let task: AxiosResponse<TaskResponse> = await axios.post(`${this.host}/v1/tasks`, taskBodyRequest, { headers: { 'userId': 1 } })
        return task.data
    }

    public async getAllTasksByUserId(userId: number): Promise<Array<TaskResponse>> {
        let tasks: AxiosResponse<Array<TaskResponse>> = await axios.get(`${this.host}/v1/users/${userId}/tasks`)
        return tasks.data
    }

    public async getTaskById(userId: number, taskId: number): Promise<TaskResponse> {
        let task: AxiosResponse<TaskResponse> = await axios.get(`${this.host}/v1/users/${userId}/tasks/${taskId}`)
        return task.data
    }

}

export default TasksService