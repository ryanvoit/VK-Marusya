'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchProfileData } from "@/api/auth/fetches"
import { client } from "@/api/client"
import Link from "next/link"
import { usePathname } from "next/navigation"

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
            return <span className="text-white">Loading...</span>

        case 'success':
            return <Link
                href={`/user/${profileQuery.data.email}`}
                className={router.slice(0, 5) == '/user' ? 'header__link header__link--user header__link--active header__link--user-active' : 
                    "header__link header__link--user"}
            >
                {profileQuery.data.name}
            </Link>

        case 'error':
            return (
                <a href="#auth" className="header__link header__link--user">Log in</a>
            )
    }
}