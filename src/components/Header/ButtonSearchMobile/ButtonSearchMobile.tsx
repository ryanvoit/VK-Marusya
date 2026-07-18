'use client'

import { CustomInput } from "@/components/Common/CustomInput/CustomInput"
import { Icon } from "@/components/Common/Icon/Icon"
import { useState } from "react"

export const ButtonSearchMobile = () => {
    const [isOpen, setOpen] = useState(false)

    function handleClickFalse() {
        setOpen(false)
    }

    function handleClickTrue() {
        setOpen(true)
    }

    //<input className="header__search-input"></input>

    return (
        <>
            <button
                className={isOpen ? "header__search-btn header__search-btn--open" : "header__search-btn"}
                onClick={handleClickTrue}
            >
                <Icon role="search--nav" />
            </button>
            <CustomInput 
                inputType="text"
                role="search"
                placeholder=""
                id="search-mobile"
                additionalFn={handleClickFalse}
            />
        </>
    )
}