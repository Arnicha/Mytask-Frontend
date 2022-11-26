import React, { useState } from 'react'
import Task from '../MyTasksPage/Task'

export default function Profile() {
  const [isShowMadalTaskDetail, setIsShowMadalTaskDetail] = useState<boolean>(false)
  return (
    <div className='w-full h-full'>
      <div className='w-full h-[250px] flex justify-center bg-white'>
        <div className='w-3/5 h-full flex justify-start items-start pt-[30px]'>
          <div>
            <img src='j.jpg' alt="profile" className='w-[180px] h-[180px] rounded-full bg-gray-300 border-[1px] border-gray-200' />
          </div>
          <div className='w-3/4 pt-4 pl-20 pr-44'>
            <div className='flex justify-between items-center'>
              <p className='text-[27px] font-medium'>Anicha Michai</p>
              <button className='w-[110px] h-[32px] text-[14px] bg-white rounded-md border-[1px] hover:drop-shadow'>Edit Profile</button>
            </div>
            <div className='w-full h-[80px] py-3 pr-[100px]'>
              <p className='line-clamp-2'> I like Music :)</p>
            </div>
            <div className='flex justify-between items-center border-t-[1px] pt-2'>
              <div className='flex flex-col items-center justify-center'>
                <p className='font-bold'>SHARE</p>
                <p className='text-[19px] text-blue-500 font-bold'>3</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='font-bold'>FOLLOWER</p>
                <p className='text-[19px] text-blue-500 font-bold'>30</p>
              </div>
              <div className='flex flex-col items-center justify-center'>
                <p className='font-bold'>FOLLOWING</p>
                <p className='text-[19px] text-blue-500 font-bold'>30</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full h-full flex justify-center py-6'>
        <div className='w-[1080px] h-full'>
          <p className='text-gray-600 font-medium'>SHARE</p>
          <div className='w-full h-full grid grid-cols-5 gap-5 py-3'>
            <Task setIsShowModalTaskDetail={setIsShowMadalTaskDetail} />
          </div>
        </div>
      </div>
    </div>
  )
}