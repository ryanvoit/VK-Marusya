import { useQuery } from "@tanstack/react-query"
import { fetchGenreMovie } from "@/api/movies/fetches";
import { FC } from "react"
import { GenreCard } from "../GenreCard/GenreCard";

export interface MovieGenreProps {
    genre: string,
    index: number,
}

export const FetchGenreItemComponent: FC<MovieGenreProps> = ({ genre, index }) => {
    const movieQuery = useQuery({
        queryFn: () => fetchGenreMovie(genre),
        queryKey: ['genreMovie', genre]
    })

    switch (movieQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <GenreCard genre={genre} src={movieQuery.data[index].backdropUrl as string} />
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