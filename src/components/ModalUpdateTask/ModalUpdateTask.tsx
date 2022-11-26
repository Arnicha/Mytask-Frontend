import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5'
import { FaTrash } from 'react-icons/fa'
import Todo from '../Todo/Todo'

interface Props {
    setIsShowModalUpdateTask: (status: boolean) => void
    setIsShowModalTaskDetail: (status: boolean) => void
}

export default function ModalUpdateTask(props: Props) {
    const [isShowSelectCoverColor, setIsShowSelectCoverColor] = useState<boolean>(false)

    const onClickCloseEditTask = (): void => {
        props.setIsShowModalUpdateTask(false)
        props.setIsShowModalTaskDetail(true)
    }

    return (
        <div className='w-screen h-screen absolute top-0 left-0 flex items-start justify-center bg-black bg-opacity-50 pt-20'>
            <div className='w-[550px] relative bg-white rounded-xl p-10'>
                <IoCloseSharp className='absolute top-3 right-3 text-xl text-gray-600 cursor-pointer hover:text-black' 
                onClick={onClickCloseEditTask} />
                <form onSubmit={() => { }} className='space-y-3'>
                    <div className='flex justify-center'>
                        <p className='text-[22px] font-bold'>UPDATE TASK</p>
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[19px] font-bold'>Topic</p>
                        <input type="text" className='w-full h-[40px] border-[1px] border-gray-700 rounded-md outline-blue-500 px-2' />
                    </div>
                    <div className='space-y-1'>
                        <p className='text-[19px] font-bold'>Description</p>
                        <input type="text" className='w-full h-[40px] border-[1px] border-gray-700 rounded-md outline-blue-500 px-2' />
                    </div>
                    <div>
                        <p className='text-[19px] font-bold'>Todolist</p>
                        <div className='px-4'>
                            <div className='flex items-center justify-start'>
                                <p className='text-[28px] mr-2 hover:cursor-pointer hover:text-gray-600'>+</p>
                                <input type="text" className='w-full border-b-[1px] outline-none border-gray-700 px-2' />
                            </div>
                            <div className='h-[290px] overflow-y-auto pr-2'>
                                <Todo />
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <div className='flex justify-start items-center'>
                            <p className='text-[19px] font-bold mr-3'>Due date</p>
                            <input type="date" className='w-[155px] h-[40px] border-[1px] border-gray-700 rounded-md outline-blue-500 px-2 hover:cursor-pointer' />
                        </div>
                        <div className='flex justify-start items-center pr-11'>
                            <p className='text-[19px] font-bold mr-3'>Cover color</p>
                            <div className='relative w-[40px] h-[40px] border-[1px] border-gray-100 bg-green-300 rounded-full hover:cursor-pointer'
                                onClick={() => setIsShowSelectCoverColor(!isShowSelectCoverColor)}>
                                {isShowSelectCoverColor &&
                                    <div className='absolute top-10 left-0 w-[136px] h-[92px] grid grid-cols-3 gap-1 shadow-md rounded-md border-[1px] border-gray-200 bg-white p-1'>
                                        <div className='w-[40px] h-[40px] border-[1px] border-gray-100 bg-green-300 rounded-full hover:cursor-pointer' onClick={() => setIsShowSelectCoverColor(false)}></div>
                                        <div className='w-[40px] h-[40px] border-[1px] border-gray-100 bg-purple-300 rounded-full hover:cursor-pointer' onClick={() => setIsShowSelectCoverColor(false)}></div>
                                        <div className='w-[40px] h-[40px] border-[1px] border-gray-100 bg-blue-300 rounded-full hover:cursor-pointer' onClick={() => setIsShowSelectCoverColor(false)}></div>
                                        <div className='w-[40px] h-[40px] border-[1px] border-gray-100 bg-red-300 rounded-full hover:cursor-pointer' onClick={() => setIsShowSelectCoverColor(false)}></div>
                                        <div className='w-[40px] h-[40px] border-[1px] border-gray-100 bg-orange-300 rounded-full hover:cursor-pointer' onClick={() => setIsShowSelectCoverColor(false)}></div>
                                        <div className='w-[40px] h-[40px] border-[1px] border-gray-100 bg-pink-300 rounded-full hover:cursor-pointer' onClick={() => setIsShowSelectCoverColor(false)}></div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className='flex items-center justify-center pt-4'>
                        <button className='px-12 py-2 bg-blue-500 rounded-md text-white text-xl font-bold'>Save change</button>
                    </div>
                </form>
            </div>
        </div>
    )
}