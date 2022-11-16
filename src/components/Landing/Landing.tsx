import React, { useState } from 'react'
import ModalLoginAndRegister from '../ModalLoginAndRegister/ModalLoginAndRegister';

export default function Landing() {
  const [isShowModalLoginAndRegister, setIsShowModalLoginAndRegister] = useState<boolean>(false)
  
  return (
    <React.Fragment>
      <div className='w-screen h-screen bg-white'>
        <div className='w-screen h-24 flex items-end justify-between px-20'>
          <div className='w-16 h-16 flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 rounded-md'>
            <div className='w-5 h-5 flex justify-center items-center rounded-full bg-opacity-0 border-[1.5px] border-black'>
              <div className='w-3 h-3 rounded-full bg-black'></div>
            </div>
          </div>
          <div className='flex items-center justify-center space-x-8'>
            <p className='text-lg cursor-pointer hover:underline underline-offset-8' onClick={() => setIsShowModalLoginAndRegister(true)}>Log in</p>
            <div className='h-12 flex items-center justify-center bg-blue-500 text-xl font-medium text-white rounded-md px-8 cursor-pointer'
              onClick={() => setIsShowModalLoginAndRegister(true)}>
              Get started
            </div>
          </div>
        </div>
      </div>
      {isShowModalLoginAndRegister && <ModalLoginAndRegister setIsShowModalLoginAndRegister={setIsShowModalLoginAndRegister} />}
    </React.Fragment>
  )
}