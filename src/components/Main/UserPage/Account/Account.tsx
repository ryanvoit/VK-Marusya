'use client'

import { ButtonAccount } from "../ButtonAccount/ButtonAccount"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "@/store/store"
import { toggleAccountState } from "@/store/accountStateSlice"
import { FetchAccountContentComponent } from "../FetchAccountContentComponent/FetchAccountContentComponent"
import { AccountDetails } from "../AccountDetails/AccountDetails"

export const Account = () => {
    const accountState = useSelector((state: RootState) => state.accountState)
    const dispatch = useDispatch()

    function changeToFavouritesState() {
        dispatch(toggleAccountState('favourites'))
    }

    function changeToaccountState() {
        dispatch(toggleAccountState('account'))
    }
    
    return (
        <div className="user-page__wrapper">
            <div className="user-page__btns">
                <ButtonAccount role='favourites' setter={changeToFavouritesState} active={accountState=='favourites'} />
                <ButtonAccount role='account' setter={changeToaccountState} active={accountState=='account'}/>
            </div>
            {accountState == 'favourites' ?
                <FetchAccountContentComponent role='favourite'/> :
                <AccountDetails />
            }
        </div>

    )
}