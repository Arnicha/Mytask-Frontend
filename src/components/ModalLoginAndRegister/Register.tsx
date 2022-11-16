import React from 'react'
import { FcGoogle } from 'react-icons/fc';

interface Props {
  setIsLogin: (status: boolean) => void
}

export default function Register(props: Props) {
  return (
    <div className='w-full space-y-3'>
      <p className='text-[28px] font-bold'>Create Account</p>
      <div>
        <p>Username</p>
        <input type="text" className='w-full h-[40px] border-[2px] border-black rounded-md outline-blue-500 px-2' />
      </div>
      <div>
        <p>Email</p>
        <input type="text" className='w-full h-[40px] border-[2px] border-black rounded-md outline-blue-500 px-2' />
      </div>
      <div>
        <p>Password</p>
        <input type="password" className='w-full h-[40px] border-[2px] border-black rounded-md outline-blue-500 px-2' />
      </div>
      <div>
        <p>Repeat Password</p>
        <input type="password" className='w-full h-[40px] border-[2px] border-black rounded-md outline-blue-500 px-2' />
      </div>
      <div>
        <p>Birth day</p>
        <input type="date" className='w-full h-[40px] border-[2px] border-black rounded-md outline-blue-500 px-2' />
      </div>
      <div className='flex justify-center items-center pt-4'>
        <button className='w-[150px] h-[40px] bg-blue-500 text-white font-medium text-lg rounded-md hover:border-[3px] border-blue-300'>Sign up</button>
      </div>
      <div className='flex justify-center items-center'>
        <p className='text-gray-600'>or</p>
      </div>
      <div>
        <button className='w-full h-[40px] flex justify-center items-center bg-white font-medium border-[2px] border-black rounded-md hover:border-blue-500'>
          <FcGoogle className='text-[26px] mr-5' />Continue with Google
        </button>
      </div>
      <div className='flex justify-start items-center pt-4'>
        <span className='mr-2'>Already a registered ? </span><span className='font-medium cursor-pointer hover:underline' onClick={() => props.setIsLogin(true)}>Login</span>
      </div>
    </div>
  )
}
