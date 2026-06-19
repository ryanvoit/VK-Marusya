'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchRandomMovie } from "@/api/movies/fetches";
import { RandomMovieComponent } from "../RandomMovieComponent/RandomMovieComponent";

export default function FetchRandomMovieComponent() {
    const queryClient = useQueryClient()

    const movieQuery = useQuery(
        {
            queryFn: () => fetchRandomMovie(),
            queryKey: ['randomMovie']
        },
        queryClient
    )

    function renewMovie (): void { movieQuery.refetch() }

    switch (movieQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <RandomMovieComponent movie={movieQuery.data} renewFn={renewMovie}  />
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