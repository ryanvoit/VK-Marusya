'use client'

import { Icon } from "@/components/Common/Icon/Icon"
import { useState } from "react"

export const ButtonSearchMobile = () => {
    const [isOpen, setOpen] = useState(false)

    function handleClick() {
        setOpen((prev) => !prev)
    }

    return (
        <>
            <button
                className={isOpen ? "header__search-btn header__search-btn--open" : "header__search-btn"}
                onClick={handleClick}
            >
                <Icon role="search--nav" />
            </button>
            <input className="header__search-input"></input>
        </>
    )
}