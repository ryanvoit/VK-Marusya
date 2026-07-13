'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchProfileData } from "@/api/auth/fetches"
import { client } from "@/api/client"
import { AccountContentComponent } from "../AccountContentComponent/AccountContentComponent"

export const FetchAccountContentComponent = () => {
    const profileQuery = useQuery(
        { queryFn: () => fetchProfileData(), queryKey: ['profile'] },
        client
    )

    switch (profileQuery.status) {
        case 'pending':
            return <span className="text-white">Loading...</span>
        case 'success':
            return (
                <AccountContentComponent data={profileQuery.data} />
            )
        case 'error':
            return null
    }
}