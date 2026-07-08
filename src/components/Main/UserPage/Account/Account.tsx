'use client'

import { useState } from "react"
import { ButtonAccount } from "../ButtonAccount/ButtonAccount"

export const Account = () => {
    const [accountState, setAccountState] = useState<'favourites' | 'account'>('favourites')

    return (
        <>
            <div className="text-white">
                <ButtonAccount role='favourites' setter={() => setAccountState('favourites')} />
                <ButtonAccount role='account' setter={() => setAccountState('account')} />
            </div>
            {accountState == 'favourites' ?
                <span className="text-white">F</span> :
                <span className="text-white">A</span>
            }
        </>

    )
}