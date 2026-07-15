'use client'

import { FC } from "react"
import { useMutation } from "@tanstack/react-query"
import { fetchFavouriteDelete } from "@/api/favourite/fetches"
import { client } from "@/api/client"
import { Icon } from "../Icon/Icon"

interface ButtonDeleteFavouriteProps {
    id: string
}

export const ButtonDeleteFavourite: FC<ButtonDeleteFavouriteProps> = ({ id }) => {
    const deleteFavoriteMutation = useMutation(
        {
            mutationFn: () => fetchFavouriteDelete(id),
            onSuccess: () => client.invalidateQueries({ queryKey: ['profile'] })
        },
        client
    )

    return (
        <button
            className="link-movie__delete-fav"
            onClick={(e) => {
                e.preventDefault()
                deleteFavoriteMutation.mutate()
            }}
            disabled={deleteFavoriteMutation.isPending}
        >
            <Icon role="cross-delete"/>
        </button>
    )
}