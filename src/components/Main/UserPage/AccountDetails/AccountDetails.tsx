import { AccountContentComponent } from "../AccountContentComponent/AccountContentComponent"
import { LogoutButton } from "../LogoutButton/LogoutButton"

export const AccountDetails = () => {
    return (
        <div className="account">
            <AccountContentComponent />
            <LogoutButton />
        </div>
    )
}