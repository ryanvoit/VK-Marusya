'use client'

import { FormLogin } from "../FormLogin/FormLogin"
import { FormRegister } from "../FormRegister/FormRegister"
import { SuccessWindow } from "../SuccessWindow/SuccessWindow"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { toggleAuthFormState } from "@/store/authFormStateSlice"

export const AuthForm = () => {
    const authState = useSelector((state: RootState) => state.authFormState)
    const dispatch = useDispatch()

    function changeToLoginState() {
        dispatch(toggleAuthFormState('login'))
    }
    function changeToSuccessState() {
        dispatch(toggleAuthFormState('success'))
    }
    function changeToRegistState() {
        dispatch(toggleAuthFormState('register'))
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