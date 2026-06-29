import { FC } from "react"
import '../authInner.css'

export interface SuccessWindowProps {
    stateChangeFn: () => void
}

export const SuccessWindow :FC<SuccessWindowProps> = ({ stateChangeFn }) => {
    return (
        <div className="auth__wrapper">
            <h2 className="auth__title">Регистрация завершена</h2>
            <p className="auth__content">Используйте вашу электронную почту для входа</p>
            <button className="auth__btn" type="button" onClick={stateChangeFn}>Войти</button>
        </div>
    )
}