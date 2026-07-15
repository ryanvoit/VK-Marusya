'use client'

// import { useRouter } from 'next/navigation'
// import { useTransition } from 'react'
import { Icon } from '@/components/Common/Icon/Icon'
import { FC  } from 'react'
import { useQuery, useMutation } from '@tanstack/react-query'
import { fetchProfileData } from '@/api/auth/fetches'
import { client } from "@/api/client"
import { ProfileInfo } from '@/api/auth/types'
import { fetchFavouriteAdd, fetchFavouriteDelete } from '@/api/favourite/fetches'

// export type ButtonProps = {
// role: 'renew'
// }

interface ButtonFavouriteProps {
    idMovie: string
}

export const ButtonFavourite:FC<ButtonFavouriteProps> = ({ idMovie }) => {

    const profileQuery = useQuery(
        {
            queryFn: () => fetchProfileData(),
            queryKey: ['profile']
        },
        client
    )

    const AddFavoriteMutation = useMutation(
        {
            mutationFn: () => fetchFavouriteAdd(idMovie),
            onSuccess: () => client.invalidateQueries({ queryKey: ['profile'] })
        },
        client
    )

    const DeleteFavoriteMutation = useMutation(
        {
            mutationFn: () => fetchFavouriteDelete(idMovie),
            onSuccess: () => client.invalidateQueries({ queryKey: ['profile'] })
        },
        client
    )

    function favourite(idMovie: string, data: ProfileInfo) {
        const datafav = data.favorites.filter((fav) => fav == idMovie)

        if (datafav.length !== 0) {
            DeleteFavoriteMutation.mutate()
        } else {
            AddFavoriteMutation.mutate()
        }
    }

    switch (profileQuery.status) {
        case 'pending':
            return <span className="text-white">Loading...</span>
        case 'success':
            const isFavourite = profileQuery.data.favorites.some((fav) => fav === idMovie)
            return (
            <button 
                className="movie__btn movie__btn--2"
                onClick={() => favourite(idMovie, profileQuery.data)}
                disabled={AddFavoriteMutation.isPending || DeleteFavoriteMutation.isPending}
            >
                { isFavourite ? <Icon role='heart--favourite' /> : <Icon role='heart' /> }
            </button>
            )
        case 'error':
            return (
                <a href="#auth" className="movie__btn movie__btn--2">
                    <Icon role='heart' />
                </a>
            )
    }
}