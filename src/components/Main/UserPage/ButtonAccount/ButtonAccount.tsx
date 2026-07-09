import { Icon } from "@/components/Common/Icon/Icon"
import { FC } from "react"

interface ButtonAccountProps {
    setter: () => void,
    role: 'favourites' | 'account',
    active: boolean
}

export const ButtonAccount: FC<ButtonAccountProps> = ({ setter, role, active }) => {
    return (
        <button
            className={active ? "user-page__btn user-page__btn--active" : "user-page__btn"}
            type="button"
            onClick={setter}
            id={role}
        >
            {
                role == 'favourites' ?
                    <>
                        <Icon role="heart--profile" />
                        <span>Favourite Movies</span>
                    </> :
                    <>
                        <Icon role='user--profile' />
                        <span>Account setting</span>
                    </>
            }
        </button>
    )

}