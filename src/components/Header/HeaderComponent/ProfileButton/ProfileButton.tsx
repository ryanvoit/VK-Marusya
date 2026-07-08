'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchProfileData } from "@/api/auth/fetches"
import { client } from "@/api/client"

export const ProfileButton = () => {
    const profileQuery = useQuery(
        {
            queryFn: () => fetchProfileData(),
            queryKey: ['profile']
        },
        client
    )

    switch (profileQuery.status) {
        case 'pending':
            return <span>Loading...</span>

        case 'success':
            return <span className="text-white"> Успех!! </span>

        case 'error':
            return (
                <a href="#auth" className="header__link">Log in</a>
            )
    }
}