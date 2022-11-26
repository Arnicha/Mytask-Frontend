import React, { useState } from 'react'
import { IoEarthSharp, IoLockClosed } from 'react-icons/io5'

interface Props {
    setIsShowModalTaskDetail: (status: boolean) => void
}

export default function Task(props: Props) {
    const [isPublic, setIsPublic] = useState<boolean>(true)
    return (
        <div className='w-[200px] h-[250px] bg-white shadow-md rounded-md hover:cursor-pointer hover:shadow-green-200'
            onClick={() => props.setIsShowModalTaskDetail(true)}>
            <div className='w-full h-1/5 flex justify-end items-start bg-green-300 rounded-md pt-2 pr-2'>
                {isPublic ?
                    <IoEarthSharp className='text-[18px] text-gray-700 text-opacity-60' />
                    :
                    <IoLockClosed className='text-[18px] text-gray-700 text-opacity-60' />
                }
            </div>
            <div className='w-full h-3/5 p-[7px]'>
                <p className='text-[14px] break-words line-clamp-2 font-bold mb-2'>Monday :)</p>
                <p className='text-[14px] break-words line-clamp-4'>a word that refers to a lung disease contracted from the inhalation of very fine silica particles, specifically from a volcano</p>
            </div>
            <div className='px-[7px] h-1/5 '>
                <p className='text-[14px] font-bold'>progress</p>
                <div className='flex items-center justify-between'>
                    <div className='w-[145px] h-[7px] bg-gray-100 rounded-lg'>
                        <div className='w-[100px] h-full bg-green-300 rounded-lg'></div>
                    </div>
                    <p className='text-[13px] font-bold'>100%</p>
                </div>
            </div>
        </div>
    )
}
