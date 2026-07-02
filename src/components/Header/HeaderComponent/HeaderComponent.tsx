import Link from "next/link"
import Image from "next/image"
import MainNav from "../MainNav/MainNav"
import { AuthComponent } from "@/components/Header/AuthComponent/AuthComponent"

export const HeaderComponent = () => {
    return (
        <div className="header__base">
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
            <a href="#auth" className="header__link">Log in</a>
            <AuthComponent />
        </div>
    )
}