'use client'

import Image from "next/image"
import { useState } from "react"
import { FormLogin }from "../FormLogin/FormLogin"
import { FormRegister }from "../FormRegister/FormRegister"
import { SuccessWindow } from "../SuccessWindow/SuccessWindow"

export const AuthComponent = () => {
    const [authState, setAuthState] = useState<'login' | 'register' | 'success'>('login')

    function changeToRegistState(): void {
        setAuthState('register')
    }
    function changeToLoginState(): void {
        setAuthState('login')
    }
    function changeToSuccessState(): void {
        setAuthState('success')
    }

    return (
        <div className="auth" id="auth">
            <Image src={'/marusya-black.svg'} alt={'marusya-black'} width={157} height={35} className="auth__img" />
            {authState === 'login' ? (
                <FormLogin stateChangeFn={changeToRegistState} />
            ) : authState === 'register' ? (
                <FormRegister stateChangeFn={changeToLoginState} />
            ) : (
                <SuccessWindow stateChangeFn={changeToLoginState} />
            )}
            <a href="#" className="auth__exit" aria-label="Закрыть">
                <Image src={'/cross.svg'} alt={'cross'} width={24} height={24} className="auth__exit-icon" />
            </a>
        </div>
    )
}