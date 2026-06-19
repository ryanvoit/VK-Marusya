'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import './mainNav.css'

export default function MainNav() {
    const router = usePathname()

    return (
        <>
            <Link href='/' className={router == '/' ? 'header__link header__link--routing header__link--active' : 'header__link header__link--routing'}>
                Home
            </Link>
            <Link href='/genres' className={router == '/genres' ? 'header__link header__link--routing header__link--active' : 'header__link header__link--routing'}>
                Genres
            </Link>
        </>
    )
}