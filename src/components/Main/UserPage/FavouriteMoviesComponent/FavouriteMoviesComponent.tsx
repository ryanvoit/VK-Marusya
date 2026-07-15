import { FC } from "react"
import { useQuery } from "@tanstack/react-query"
import { fetchMovieById } from "@/api/movies/fetches"
import { client } from "@/api/client"
import { MovieList } from "@/api/movies/types"
import { FavouriteMovieList } from "../FavouriteMovieList/FavouriteMovieList"

export interface FavouriteMoviesProps {
    favorites: string[]
}

export const FavouriteMoviesComponent: FC<FavouriteMoviesProps> = ({ favorites }) => {
    const favouriteMovies = useQuery(
        {
            queryFn: () => fetchFavouriteMovies(favorites),
            queryKey: ['favouriteMovies', favorites],
            enabled: favorites.length > 0,
        },
        client
    )

    const fetchFavouriteMovies = (favoritesIds: string[]): Promise<MovieList> => {
        const movies = Promise.all(
            favoritesIds.map((id) => fetchMovieById(id))
        )
        return movies
    }

    switch (favouriteMovies.status) {
        case 'pending':
            return <span className="text-white">Loading...</span>
        case 'success':
            return ( 
                <FavouriteMovieList movies={favouriteMovies.data} />
            )
        case 'error':
            return null
    }
}