import { Account } from "../Account/Account"

export const UserPageComponent = () => {
    return (
        <div className="user-page">
            <h1 className="user-page__title">My account</h1>
            <Account />
        </div>
    )
}