import { FC } from "react"
import { AccountLineComponent } from "../AccountLineComponent/AccountLineComponent"
import { Icon } from "@/components/Common/Icon/Icon"

interface AccountContentComponentProps {
    data: AccountContent
}

interface AccountContent {
    email: string
    name: string
    surname: string
}

export const AccountContentComponent:FC<AccountContentComponentProps> = ({ data }) => {
    return (
        <div className="account__content">
            <AccountLineComponent role="first" name={data.name} surname={data.surname} 
            elem={<p className="account__initials">{`${data.name.slice(0, 1)}${data.surname.slice(0, 1)}`}</p>} />
            <AccountLineComponent role="second" email={data.email} 
            elem={<Icon role="email-line"/>} />
        </div>
    )
}