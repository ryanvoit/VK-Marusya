'use client'

import { useState } from "react"
import { FormLogin } from "../FormLogin/FormLogin"
import { FormRegister } from "../FormRegister/FormRegister"
import { SuccessWindow } from "../SuccessWindow/SuccessWindow"

export const AuthForm = () => {
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
        <>
            {
                authState === 'login' ? (
                    <FormLogin stateChangeFn={changeToRegistState} />
                ) : authState === 'register' ? (
                    <FormRegister stateChangeFn={changeToLoginState} stateSuccessChangeFn={changeToSuccessState} />
                ) : (
                    <SuccessWindow stateChangeFn={changeToLoginState} />
            )}
        </>
    )
}