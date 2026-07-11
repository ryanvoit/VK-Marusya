import Link from "next/link"
import Image from "next/image"
import MainNav from "../MainNav/MainNav"
import { AuthComponent } from "@/components/Header/AuthComponent/AuthComponent"
import { CustomInput } from "../../Common/CustomInput/CustomInput"
import { ProfileButton } from "../ProfileButton/ProfileButton"

export const HeaderComponent = () => {
    return (
        <div className="container">
            <div className="header__base">
                <Link href='/' className="header__link header__link--main">
                    <Image src={'/marusya.svg'} alt={'marusya'} width={144} height={32} className="header__link-img" />
                </Link>
                <div className="header__center">
                    <MainNav />
                    <CustomInput btnType="text" role="search" placeholder="Search" id="search" />
                </div>
                <ProfileButton />
                <AuthComponent />
            </div>
        </div>
    )
}