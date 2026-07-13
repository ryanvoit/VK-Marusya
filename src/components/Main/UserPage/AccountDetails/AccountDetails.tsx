import { FetchAccountContentComponent } from "../FetchAccountContentComponent/FetchAccountContentComponent"
import { LogoutButton } from "../LogoutButton/LogoutButton"

export const AccountDetails = () => {
    return (
        <div className="account">
            <FetchAccountContentComponent />
            <LogoutButton />
        </div>
    )
}