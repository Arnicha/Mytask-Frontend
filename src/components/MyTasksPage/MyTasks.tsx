import React, { useState } from 'react'
import ModalCreateNewTask from '../ModalCreateNewTask/ModalCreateNewTask'
import ModalTaskDetail from '../ModalTaskDetail/ModalTaskDetail'
import ModalUpdateTask from '../ModalUpdateTask/ModalUpdateTask'
import Task from './Task'

export default function MyTasks() {
  const [isShowModalCreateNewTask, setIsShowModalCreateNewTask] = useState<boolean>(false)
  const [isShowModalUpdateTask, setIsShowModalUpdateTask] = useState<boolean>(false)
  const [isShowMadalTaskDetail, setIsShowMadalTaskDetail] = useState<boolean>(false)
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
      <div className='w-full h-full flex justify-center py-6'>
        <div className='w-[1080px] h-full'>
          <div className='flex justify-between items-center'>
            <p className='text-xl font-semibold'>To Day</p>
            <div className='flex justify-center items-center' onClick={() => setIsShowModalCreateNewTask(true)}>
              <span className='text-2xl font-medium mr-2 hover:cursor-pointer'>+</span>
              <span className='text-lg font-semibold hover:cursor-pointer'>Create New Task</span>
            </div>
          </div>
          <div className='w-full h-full grid grid-cols-5 gap-5 py-3'>
            <Task setIsShowModalTaskDetail={setIsShowMadalTaskDetail}/>
          </div>
        </div>
      </div>
      {isShowModalCreateNewTask && <ModalCreateNewTask setIsShowModalCreateNewTask={setIsShowModalCreateNewTask}/>}
      {isShowModalUpdateTask && <ModalUpdateTask setIsShowModalUpdateTask={setIsShowModalUpdateTask} setIsShowModalTaskDetail={setIsShowMadalTaskDetail}/>}
      {isShowMadalTaskDetail && <ModalTaskDetail setIsShowModalTaskDetail={setIsShowMadalTaskDetail} setIsShowModalUpdateTask={setIsShowModalUpdateTask}/>}
    </div>
  )
}
