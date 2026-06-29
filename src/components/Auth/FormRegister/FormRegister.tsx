import '../authInner.css'
import { CustomInput } from "../CustomInput/CustomInput"
import { FC } from "react"

export interface FormRegisterProps {
    stateChangeFn: () => void
}

export const FormRegister:FC<FormRegisterProps> = ({ stateChangeFn }) => {
    return (
        <form className="auth__form">
            <div className="auth__fields">
                <CustomInput role='email' btnType='email' id='email' placeholder="Email" />
                <CustomInput role='user' btnType='text' id='user-name' placeholder='Name' />
                <CustomInput role='user' btnType='text' id='user-lastname' placeholder='Last name' />
                <CustomInput role='password' btnType='password' id='password-confirmation' placeholder="Password" />
                <CustomInput role='password' btnType='password' id='password' placeholder="Confirm the password" />
            </div>
            <button className="auth__btn" type="submit">Создать аккаунт</button>
            <button className="auth__btn auth__btn--link" type="button" onClick={stateChangeFn}>У меня есть пароль</button>
        </form>
    )
}