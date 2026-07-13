import { FC, ReactNode } from "react"

interface AccountLineComponentFirstProps {
    role: 'first'
    name: string
    surname: string
    elem: ReactNode
}

interface AccountLineComponentSecondProps {
    role: 'second'
    email: string
    elem: ReactNode
}

type AccountLineComponentProps = AccountLineComponentSecondProps | AccountLineComponentFirstProps

export const AccountLineComponent: FC<AccountLineComponentProps> = ( props ) => {
    return (
        <div className="account__content-line">
            <div className="account__image">
                {props.elem}
            </div>
            <div className="account__content-text">
                <h3 className="account__content-title">{ props.role == 'first' ? 'Name & Surname' : 'Email'}</h3>
                <p className="account__content-data">{ props.role == 'first' ? `${props.name} ${props.surname}` : `${props.email}`}</p>
            </div>
        </div>
    )
}