import React, { useState } from 'react'
import { IoEarthSharp, IoLockClosed } from 'react-icons/io5'
import { TaskResponse } from '../../models/tasks/TaskResponse'

interface Props {
    data: TaskResponse
    setIsShowModalTaskDetail: (status: boolean) => void
}

export default function Task(props: Props) {
    const { data } = props
    return (
        <div className='w-[200px] h-[250px] bg-white shadow-md rounded-md hover:cursor-pointer hover:shadow-green-200'
            onClick={() => props.setIsShowModalTaskDetail(true)}>
            <div className={`w-full h-1/5 flex justify-end items-start ${data.coverCodeColor.codeColor} rounded-md pt-2 pr-2`}>
                {data.isPublic ?
                    <IoEarthSharp className='text-[18px] text-gray-700 text-opacity-60' />
                    :
                    <IoLockClosed className='text-[18px] text-gray-700 text-opacity-60' />
                }
            </div>
            <div className='w-full h-3/5 p-[7px]'>
                <p className='text-[14px] break-words line-clamp-2 font-bold mb-2'>{data.topic}</p>
                <p className='text-[14px] break-words line-clamp-4'>{data.description}</p>
            </div>
            <div className='px-[7px] h-1/5 '>
                <p className='text-[14px] font-bold'>progress</p>
                <div className='flex items-center justify-between'>
                    <div className='w-[145px] h-[7px] bg-gray-100 rounded-lg'>
                        <div className={`${data.scaleProgress} h-full ${data.coverCodeColor.codeColor} rounded-lg`}></div>
                    </div>
                    <p className='text-[13px] font-bold'>{data.progress}%</p>
                </div>
            </div>
        </div>
    )
}
