'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchProfileData } from "@/api/auth/fetches"
import { client } from "@/api/client"
import { AccountContentComponent } from "../AccountContentComponent/AccountContentComponent"
import { FC } from "react"
import { FavouriteMoviesComponent } from "../FavouriteMoviesComponent/FavouriteMoviesComponent";

interface FetchAccountContentComponentProps {
    role: 'account' | 'favourite'
}

export const FetchAccountContentComponent: FC<FetchAccountContentComponentProps> = ({ role }) => {
    const profileQuery = useQuery(
        { queryFn: () => fetchProfileData(), queryKey: ['profile'] },
        client
    )

    switch (profileQuery.status) {
        case 'pending':
            return <span className="text-white">Loading...</span>
        case 'success':
            return (
                role === 'account' ? <AccountContentComponent 
                    email={profileQuery.data.email}
                    name={profileQuery.data.name}
                    surname={profileQuery.data.surname} 
                /> : 
                <FavouriteMoviesComponent favorites={profileQuery.data.favorites} />
            )
        case 'error':
            return null
    }
}