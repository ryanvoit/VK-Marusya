import { Button } from "antd"
import Link from "next/link"
import Image from "next/image"
import './headerComponent.css'
import MainNav from "../MainNav/MainNav"

export default function HeaderComponent() {
    return (
        <div className="header-base">
            <Link href='/' className="header-link">
                <Image
                    src={'/marusya.svg'}
                    alt={'marusya'}
                    width={144}
                    height={32}
                    className="header-link__img"
                />
            </Link>
            <div className="header-center">
                <MainNav /> 
                <div className="header-search">
                    <input className="header-search__input" placeholder="Поиск" />
                    <Image src={'/search.svg'} alt={'search'} width={24} height={24} className="header-search__icon" />
                </div>
            </div>
            <Button className="header-link">Войти</Button>
        </div>
    )
}