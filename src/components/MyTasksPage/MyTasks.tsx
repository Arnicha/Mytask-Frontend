import React, { useState } from 'react'
import { FaDizzy, FaRunning, FaSearch, FaTasks, FaRegWindowMinimize, FaRegFrown } from 'react-icons/fa'
import { MdTaskAlt } from 'react-icons/md'
import { RiEmotionSadLine } from 'react-icons/ri'
import { TaskResponse } from '../../models/tasks/TaskResponse'
import { useGetTasksByUserIdQuery } from '../../service/tasks/TaskApi'
import ModalCreateNewTask from '../ModalCreateNewTask/ModalCreateNewTask'
import ModalTaskDetail from '../ModalTaskDetail/ModalTaskDetail'
import ModalUpdateTask from '../ModalUpdateTask/ModalUpdateTask'
import Task from './Task'

export default function MyTasks() {
  const [isShowModalCreateNewTask, setIsShowModalCreateNewTask] = useState<boolean>(false)
  const [isShowModalUpdateTask, setIsShowModalUpdateTask] = useState<boolean>(false)
  const [isShowMadalTaskDetail, setIsShowMadalTaskDetail] = useState<boolean>(false)

  const { data, error, isLoading } = useGetTasksByUserIdQuery(1)

  return (
    <div className='w-full h-full'>
      <div className='w-full h-[160px] flex justify-center bg-white'>
        <div className='w-3/5 h-full flex justify-between items-center'>
          <div className='pt-6'>
            <p className='text-3xl font-light'>Hello</p>
            <p className='text-4xl font-medium'>Anicha Michai</p>
            <div>
              <span className='text-sm font-bold'>Sunday,</span><span className='text-sm'> 28 November 2021</span>
            </div>
          </div>
          <div>
            <img src='j.jpg' alt="profile" className='w-[120px] h-[120px] rounded-full bg-gray-300 border-[1px] border-gray-200' />
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-start py-6 px-20'>
        <div className='mr-16 pt-5'>
          <div className='w-[300px] h-[38px] flex justify-center items-center bg-blue-500 rounded-3xl drop-shadow-md mb-5 hover:cursor-pointer' onClick={() => setIsShowModalCreateNewTask(true)}>
            <span className='text-2xl text-white font-medium mr-2'>+</span>
            <span className='text-lg text-white font-semibold'>Create New Task</span>
          </div>
          <div className='w-[300px] h-[400px] bg-white drop-shadow-md rounded-md'>
            <div className='w-full flex justify-center items-center py-4'>
              <div className='w-[265px] h-[38px] flex items-center border-[1px] border-blue-200 rounded-3xl bg-blue-50 p-3'>
                <input type="text" className='w-full outline-none bg-blue-50 pr-2' placeholder='Search your topic' />
                <FaSearch />
              </div>
            </div>
            <div className='w-full flex justify-start items-center text-white font-medium bg-blue-500 pl-4 py-[5px] cursor-pointer'>
              <FaTasks className='text-[22px] mr-4' />
              <p className='text-[17px]'>All Activity</p>
            </div>
            <div className='w-full flex justify-start items-center text-black font-medium  pl-4 py-[5px] hover:bg-gray-100 cursor-pointer'>
              <FaRunning className='text-[22px] mr-4' />
              <p className='text-[17px]'>In Progress</p>
            </div>
            <div className='w-full flex justify-start items-center text-black font-medium  pl-4 py-[5px] hover:bg-gray-100 cursor-pointer'>
              <FaRegWindowMinimize className='text-[22px] mr-4' />
              <p className='text-[17px]'>No Progress</p>
            </div>
            <div className='w-full flex justify-start items-center text-black font-medium  pl-4 py-[5px] hover:bg-gray-100 cursor-pointer'>
              <MdTaskAlt className='text-[22px] mr-4' />
              <p className='text-[17px]'>Tasks Completed</p>
            </div>
            <div className='w-full flex justify-start items-center text-black font-medium  pl-4 py-[5px] hover:bg-gray-100 cursor-pointer'>
              <FaRegFrown className='text-[22px] mr-4' />
              <p className='text-[17px]'>Tasks Failed</p>
            </div>
          </div>
        </div>
        <div className='w-[1080px] h-full'>
          <div className='flex justify-start items-center'>
            <p className='text-xl font-semibold'>To Day</p>
          </div>
          <div className='w-full h-full grid grid-cols-5 gap-5 py-3'>
            {data && data.map((task: TaskResponse) => {
              return (
                <Task key={task.id} data={task} setIsShowModalTaskDetail={setIsShowMadalTaskDetail} />
              )
            })}
          </div>
        </div>
      </div>
      {isShowModalCreateNewTask && <ModalCreateNewTask setIsShowModalCreateNewTask={setIsShowModalCreateNewTask} />}
      {isShowModalUpdateTask && <ModalUpdateTask setIsShowModalUpdateTask={setIsShowModalUpdateTask} setIsShowModalTaskDetail={setIsShowMadalTaskDetail} />}
      {isShowMadalTaskDetail && <ModalTaskDetail setIsShowModalTaskDetail={setIsShowMadalTaskDetail} setIsShowModalUpdateTask={setIsShowModalUpdateTask} />}
    </div>
  )
}
