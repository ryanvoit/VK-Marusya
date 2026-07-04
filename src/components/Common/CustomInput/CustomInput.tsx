import { FC } from "react"
import { Icon } from "../Icon/Icon"

export interface CustomInputProps {
    btnType: 'email' | 'password' | 'text',
    role: 'email' | 'password' | 'user' | 'search',
    placeholder: string,
    id: string,
}

export const CustomInput: FC<CustomInputProps> = ({ btnType, role, placeholder, id }) => {
    const customInputClass = role=='search' ? 'custom-input custom-input--search' : 'custom-input'
    
    return (
        <div className={customInputClass}>
            <input type={btnType} id={id} placeholder={placeholder} className="custom-input__field" />
            <Icon role={role} />
        </div>
    )
}