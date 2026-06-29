import '../authInner.css'
import { CustomInput } from "../CustomInput/CustomInput"
import { FC } from "react"

export interface FormLoginProps {
    stateChangeFn: () => void
}

export const FormLogin:FC<FormLoginProps> = ({ stateChangeFn }) => {
    return (
        <form className="auth__form">
            <div className="auth__fields">
                <CustomInput role='email' btnType='email' id='email' placeholder="Email" />
                <CustomInput role='password' btnType='password' id='password' placeholder="Password" />
            </div>
            <button className="auth__btn" type="submit">Войти</button>
            <button className="auth__btn auth__btn--link" type="button" onClick={stateChangeFn}>Регистрация</button>
        </form>
    )
}