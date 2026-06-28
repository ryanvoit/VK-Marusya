import { useQuery } from "@tanstack/react-query"
import { fetchGenreMovie } from "@/api/movies/fetches";
import { FC } from "react"
import { GenrePageComponent } from "../GenrePageComponent/GenrePageComponent";

export interface MovieGenreProps {
    genre: string,
}

export const FetchMoviesByGenreComponent : FC<MovieGenreProps> = ({ genre }) => {
    const movieQuery = useQuery({
        queryFn: () => fetchGenreMovie(genre),
        queryKey: ['genreMovie', genre]
    })

    switch (movieQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <GenrePageComponent movies={movieQuery.data} genre={genre}/>
            )
        case 'error':
            return (
                <div>
                    <span className='text-white'>Произошла ошибка:</span>

                    <button className='text-white' onClick={() => movieQuery.refetch()}>
                        Повторить запрос
                    </button>
                </div>
            )
    }
}