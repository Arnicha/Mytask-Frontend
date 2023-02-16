import React, { useState } from 'react'
import { IoCloseSharp, IoEarthSharp, IoLockClosed } from 'react-icons/io5'
import Todo from '../Todo/Todo'

interface Props {
    setIsShowModalTaskDetail: (status: boolean) => void
    setIsShowModalUpdateTask: (status: boolean) => void
}

export default function ModalTaskDetail(props: Props) {
    const [isPublic, setIsPublic] = useState<boolean>(false)

    const onClickEditTask = (): void => {
        props.setIsShowModalTaskDetail(false)
        props.setIsShowModalUpdateTask(true)
    }

    return (
        <div className='w-screen h-screen absolute top-0 left-0 flex items-start justify-center bg-black bg-opacity-50 pt-20'>
            <div className='w-[550px] h-[800px] relative bg-white rounded-xl'>
                <div className='absolute top-3 right-3 flex items-center'>
                    {isPublic ?
                        <IoEarthSharp className='text-[22px] text-black mr-3' />
                        :
                        <IoLockClosed className='text-[22px] text-black mr-3' />
                    }
                    <div className='w-[100px] h-[30px] flex items-center justify-center rounded-md text-gray-600 border-[1px] border-gray-200 cursor-pointer mr-3 hover:bg-gray-300 hover:bg-opacity-30 hover:text-black'
                        onClick={onClickEditTask}>
                        <p className='font-bold'>Edit Task</p>
                    </div>
                    <IoCloseSharp className='text-xl text-gray-600 cursor-pointer hover:text-black' onClick={() => props.setIsShowModalTaskDetail(false)} />
                </div>
                <div className='w-full h-[140px] bg-green-300 rounded-t-xl pt-[25px] px-[15px] pb-[15px]'>
                    <p className='w-[400px] text-[18px] break-words line-clamp-1 font-bold mb-2'>Monday</p>
                    <p className='break-words line-clamp-2'>A word that refers to a lung disease contracted from the inhalation of very fine silica particles.</p>
                    <div className='flex justify-end'>
                        <span className='text-[15px] mr-2'>Due date</span><span className='text-[15px] font-bold'>28 Nov 2021</span>
                    </div>
                </div>
                <div className='p-[15px]'>
                    <p className='text-[18px] font-bold'>Todolist</p>
                    <div className='px-6'>
                        <div className='flex items-center justify-start'>
                            <p className='text-[28px] mr-2 hover:cursor-pointer hover:text-gray-600'>+</p>
                            <input type="text" className='w-full border-b-[1px] outline-none border-gray-700 px-2' placeholder='Enter new todo' />
                        </div>
                        <div className='h-[470px] overflow-y-auto pr-3'>
                            <Todo textToda='jjjj'/>
                        </div>
                    </div>
                </div>
                <div className='px-[15px]'>
                    <p className='text-[18px] font-bold'>Progress</p>
                    <div className='flex items-center justify-between'>
                        <div className='w-[450px] h-[10px] bg-gray-100 rounded-lg'><div className='w-[200px] h-full bg-green-300 rounded-lg'></div></div>
                        <p className='text-[16px] font-bold mr-3'>100%</p>
                    </div>
                </div>
            </div>
        </div>
    )
}