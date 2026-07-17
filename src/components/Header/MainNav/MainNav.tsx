'use client'

import Link from "next/link"
import { Icon } from "@/components/Common/Icon/Icon"
import { usePathname } from "next/navigation"

export default function MainNav() {
    const router = usePathname()

    return (
        <>
            <Link href='/' className={router == '/' || router.slice(0,2) == '/1' ||
                router.slice(0,2) == '/2' || router.slice(0,2) == '/3' || router.slice(0,2) == '/4' || router.slice(0,2) == '/5'  
                || router.slice(0,2) == '/6' || router.slice(0,2) == '/7' || router.slice(0,2) == '/8' || router.slice(0,2) == '/9'
                ? 'header__link header__link--active header__link--home' : 'header__link header__link--home'}>
                Home
            </Link>
            <Link href='/genres'  className={router.slice(0,7) == '/genres' ? 'header__link header__link--active header__link--genres' : 'header__link header__link--genres'}>
                <span className="header__link-text">Genres</span>
                <Icon role='genres'/>
            </Link>
        </>
    )
}