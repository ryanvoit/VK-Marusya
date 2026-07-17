'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchProfileData } from "@/api/auth/fetches"
import { client } from "@/api/client"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Icon } from "@/components/Common/Icon/Icon"

export const ProfileButton = () => {
    const profileQuery = useQuery(
        {
            queryFn: () => fetchProfileData(),
            queryKey: ['profile']
        },
        client
    )

    const router = usePathname()

    switch (profileQuery.status) {
        case 'pending':
            return <span className="text-white text-[10px]">Loading...</span>

        case 'success':
            return <Link
                href={`/user/${profileQuery.data.email}`}
                className={router.slice(0, 5) == '/user' ? 'header__link header__link--user header__link--active header__link--user-active' : 
                    "header__link header__link--user"}
            >
                <span className="header__link-text">{profileQuery.data.name}</span>
                <Icon role='user--nav' />
            </Link>

        case 'error':
            return (
                <a href="#auth" className="header__link header__link--user">
                    <span className="header__link-text">Log in</span>
                    <Icon role='user--nav' />
                </a>
            )
    }
}