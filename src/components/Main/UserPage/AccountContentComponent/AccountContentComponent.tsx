import { FC } from "react"
import { AccountLineComponent } from "../AccountLineComponent/AccountLineComponent"
import { Icon } from "@/components/Common/Icon/Icon"

export interface AccountContentProps {
    email: string
    name: string
    surname: string
}

export const AccountContentComponent:FC<AccountContentProps> = ({ email, name, surname }) => {
    return (
        <div className="account__content">
            <AccountLineComponent role="first" name={name} surname={surname} 
            elem={<p className="account__initials">{`${name.slice(0, 1)}${surname.slice(0, 1)}`}</p>} />
            <AccountLineComponent role="second" email={email} 
            elem={<Icon role="email-line"/>} />
        </div>
    )
}