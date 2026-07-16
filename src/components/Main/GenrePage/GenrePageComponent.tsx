'use client'

import { GenreMoviesList } from "./GenreMoviesList"
import { FC } from "react"
import { useInfiniteQuery } from "@tanstack/react-query"
import { fetchGenreMoviesFull } from "@/api/movies/fetches"
import { client } from '@/api/client'

export interface GenrePageProps {
    genre: string
}

export const GenrePageComponent: FC<GenrePageProps> = ({ genre }) => {
    const moviesQuery = useInfiniteQuery(
        {
            queryKey: ['genreMovies', genre],
            queryFn: ({ pageParam }) => fetchGenreMoviesFull(genre, pageParam, 10),
            initialPageParam: 0,
            getNextPageParam: (lastPage, allPages) => {
                if (lastPage.length < 10) return undefined
                return allPages.length
            },
        },
    client
    )

    switch (moviesQuery.status) {
        case 'pending':
            return <span className="text-white">Loading...</span>
        case 'error':
            return null
        case 'success':
            return (
                <GenreMoviesList
                    genre={genre}
                    movies={moviesQuery.data.pages.flat()}
                    addFn={() => moviesQuery.fetchNextPage()}
                    hasMore={moviesQuery.hasNextPage}
                />
            )
    }
}