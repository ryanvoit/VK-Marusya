import { Flex, Button, Row, Col } from "antd"
import Link from "next/link"
import Image from "next/image"
import './headerComponent.css'

export default function HeaderComponent() {

    return (
        <div
            className="header-base"
        >
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
                <Link href='/' className="header-link header-link--routing">
                    Главная
                </Link>
                <Link href='/genres' className="header-link header-link--routing">
                    Жанры
                </Link>
                <div className="header-search">
                    <input className="header-search__input" placeholder="Поиск" />
                    <Image
                        src={'/search.svg'}
                        alt={'search'}
                        width={24}
                        // [655px]
                        height={24}
                        className="header-search__icon"
                    />
                </div>
            </div>
            <Button className="header-link">
                Войти
            </Button>
        </div>
    )
}