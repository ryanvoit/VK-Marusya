'use client'

import Image from 'next/image'
import './loginComponent.css'
import { FC } from 'react'

export interface LoginProps {
    loginWindow: boolean,
    loginOff: () => void
}

export const LoginComponent: FC<LoginProps> = ({ loginWindow, loginOff }) => {
    return (
        <div className={loginWindow ? "login" : "login login--off"}>
            <button onClick={loginOff} className="login__exit">
                <Image src={'/cross.svg'} alt={'cross'} width={24} height={24} className='login__exit-icon' />
            </button>
        </div>
    )
}