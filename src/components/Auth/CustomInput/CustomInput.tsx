import Image from "next/image"
import './customInput.css'
import { FC } from "react"
import { Icon } from "../Icon/Icon"

export interface CustomInputProps {
    btnType: 'email' | 'password' | 'text',
    role: 'email' | 'password' | 'user',
    placeholder: string,
    id: string,
}

export const CustomInput: FC<CustomInputProps> = ({ btnType, role, placeholder, id }) => {
    return (
        <div className="custom-input">
            <input type={btnType} id={id} placeholder={placeholder} className="custom-input__field" />
            <Icon role={role} />
        </div>
    )
}