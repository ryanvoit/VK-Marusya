'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchProfileData } from "@/api/auth/fetches"
import { client } from "@/api/client"

export const AccountContentComponent = () => {
    const profileQuery = useQuery(
        { queryFn: () => fetchProfileData(), queryKey: ['profile'] },
        client
    )

    switch (profileQuery.status) {
        case 'pending':
            return <span className="text-white">Loading...</span>
        case 'success':
            return <span className="account__content">{profileQuery.data.email}</span>
        case 'error':
            return null
    }
}