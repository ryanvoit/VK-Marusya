import { Icon } from "@/components/Common/Icon/Icon"
import { FC } from "react"

interface ButtonAccountProps {
    setter: () => void,
    role: 'favourites' | 'account'
}

export const ButtonAccount: FC<ButtonAccountProps> = ({ setter, role }) => {
    return (
        <button
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