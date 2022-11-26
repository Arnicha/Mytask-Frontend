import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Navbar() {
  const location = useLocation()
  const [pathName, setPathName] = useState<string>('')

  useEffect(() => {
    setPathName(location.pathname)
  }, [location.pathname])

  return (
    <div className='w-screen h-[56px] flex justify-between items-center bg-black px-4'>
      <div className='flex items-center justify-start text-[17px] font-bold space-x-1'>
        <div className='w-[40px] h-[40px] flex justify-center items-center bg-gradient-to-r from-blue-500 to-green-400 hover:from-pink-500 hover:to-yellow-500 rounded-md'>
          <div className='w-[18px] h-[18px] flex justify-center items-center rounded-full bg-opacity-0 border-[1.5px] border-black'>
            <div className='w-[8px] h-[8px] rounded-full bg-black'></div>
          </div>
        </div>
        <Link to='/Home' className='bg-clip-text font-bold text-transparent bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500'>MYTASKS</Link>
      </div>
      <div className='h-full flex items-center'>
        <div className={`w-[100px] h-full flex justify-center items-end font-bold border-b-[3px] border-black pb-2 ${pathName === '/Home' ? 'text-green-400  border-green-400' : 'text-white'}`}>
          <Link to='/Home'>Home</Link>
        </div>
        <div className={`w-[100px] h-full flex justify-center items-end font-bold border-b-[3px] border-black pb-2 ${pathName === '/Mytasks' ? 'text-green-400 border-green-400' : 'text-white'}`}>
          <Link to='/Mytasks'>My Tasks</Link>
        </div>
      </div>
      <Link  to='/Profile' className={`border-[2px] rounded-full ${pathName === '/Profile' ? 'border-green-400' : 'border-white'}`}>
        <img src="j.jpg" alt="profile" className='w-[40px] h-[40px] rounded-full cursor-pointer bg-gray-400' />
      </Link>
    </div>
  )
}
