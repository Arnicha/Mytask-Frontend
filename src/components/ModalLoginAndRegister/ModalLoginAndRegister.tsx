import React, { useState } from 'react'
import { IoCloseSharp } from 'react-icons/io5';
import Login from './Login';
import Register from './Register';

interface Props {
    setIsShowModalLoginAndRegister: (status: boolean) => void
}

export default function ModalLoginAndRegister(props: Props) {
    const [isLogin, setIsLogin] = useState<boolean>(true)

    const closeModalLoginAndRegister = (status: boolean): void => {
        props.setIsShowModalLoginAndRegister(status)
    }

    return (
        <div className='w-screen h-screen absolute top-0 left-0 flex items-start justify-center bg-black bg-opacity-50 pt-20'>
            <div className='w-[450px] relative flex justify-center items-start bg-white rounded-xl p-10'>
                <IoCloseSharp className='absolute top-3 right-3 text-xl text-gray-600 cursor-pointer hover:text-black' onClick={() => closeModalLoginAndRegister(false)} />
                {isLogin ?
                    <Login setIsLogin={setIsLogin}/>
                    :
                    <Register setIsLogin={setIsLogin}/>
                }
            </div>
        </div>
    )
}
