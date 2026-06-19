import Link from "next/link"
import Image from "next/image"
import './headerComponent.css'
import MainNav from "../MainNav/MainNav"
import { FC } from "react"

export interface HeaderProps {
    loginOn: () => void
}

export const HeaderComponent: FC<HeaderProps> = ({ loginOn }) => {
    return (
        <div className="header__base containner">
            <Link href='/' className="header__link">
                <Image src={'/marusya.svg'} alt={'marusya'} width={144} height={32} className="header__link-img" />
            </Link>
            <div className="header__center">
                <MainNav /> 
                <div className="header__search">
                    <input className="header__search-input" placeholder="Search" />
                    <Image src={'/search.svg'} alt={'search'} width={24} height={24} className="header__search-icon" />
                </div>
            </div>
            <button className="header__link" onClick={loginOn}>Log in</button>
        </div>
    )
}