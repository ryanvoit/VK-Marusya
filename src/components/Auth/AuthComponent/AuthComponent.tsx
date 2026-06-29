'use client'

import Image from 'next/image'
import './authComponent.css'
import { FC } from 'react'
import { useState } from 'react'
import { FormRegister } from '../FormRegister/FormRegister'
import { FormLogin } from '../FormLogin/FormLogin'
import { SuccessWindow } from '../SuccessWindow/SuccessWindow'

export interface LoginProps {
    authWindow: boolean,
    authOff: () => void
}

export const AuthComponent: FC<LoginProps> = ({ authWindow, authOff }) => {
    const [authState, setAuthState] = useState<'login' | 'register' | 'success'>('login')

    function changeToRegistState () {
        setAuthState('register')
    }
    function changeToLoginState () {
        setAuthState('login')
    }
    function changeToSuccessState () {
        setAuthState('success')
    }

    return (
        <div className={authWindow ? "auth" : "auth auth--off"}>
            <Image src={'/marusya-black.svg'} alt={'marusya-black'} width={157} height={35} className='auth__img' />
            {authState == 'login' ? (
                <FormLogin stateChangeFn={changeToRegistState} />
            ) : authState == 'register' ? (
                <FormRegister stateChangeFn={changeToLoginState} />
            ) : (
                <SuccessWindow stateChangeFn={changeToLoginState}/>
            )}
            <button onClick={authOff} className="auth__exit">
                <Image src={'/cross.svg'} alt={'cross'} width={24} height={24} className='auth__exit-icon' />
            </button>
        </div>
    )
}