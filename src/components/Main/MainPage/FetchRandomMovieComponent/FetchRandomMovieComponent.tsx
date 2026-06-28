'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchRandomMovie } from "@/api/movies/fetches";
import { MovieComponent } from "../MovieComponent/MovieComponent";

export default function FetchRandomMovieComponent() {
    const movieQuery = useQuery({
            queryFn: () => fetchRandomMovie(),
            queryKey: ['randomMovie']
        })

    function renewMovie (): void { movieQuery.refetch() }

    switch (movieQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <MovieComponent movie={movieQuery.data} renewFn={renewMovie} role="random"  />
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