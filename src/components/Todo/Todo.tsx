import React, { useState } from 'react'
import { FaTrash } from 'react-icons/fa'

interface Props {
    textToda: string
}

export default function Todo(props: Props) {
  
    return (
        <div className='flex justify-between'>
            <div className='flex justify-start items-center'>
                <div className='w-[14px] h-[14px] border-[1px] border-black bg-white rounded-full'></div>
                <p className='ml-2'>{props.textToda}</p>
            </div>
            <FaTrash className='text-purple-500' />
        </div>
    )
}
