'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import './mainNav.css'

export default function MainNav() {
    const router = usePathname()

    // Redux - router - useState

    return (
        <>
            <Link href='/' className={router == '/' || router.slice(0,2) == '/1' ||
                router.slice(0,2) == '/2' || router.slice(0,2) == '/3' || router.slice(0,2) == '/4' || router.slice(0,2) == '/5'  
                || router.slice(0,2) == '/6' || router.slice(0,2) == '/7' || router.slice(0,2) == '/8' || router.slice(0,2) == '/9'
                ? 'header__link header__link--routing header__link--active' : 'header__link header__link--routing'}>
                Home
            </Link>
            <Link href='/genres'  className={router.slice(0,7) == '/genres' ? 'header__link header__link--routing header__link--active' : 'header__link header__link--routing'}>
                Genres
            </Link>
        </>
    )
}