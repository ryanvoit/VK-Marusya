'use client'

import { useQuery } from "@tanstack/react-query"
import { RandomMovieComponent } from "../RandomMovieComponent/RandomMovieComponent";
import { useQueryClient } from "@tanstack/react-query";
import { fetchTop10Movies } from "@/api/movies/fetches";
import { Top10MoviesComponent } from "../Top10MoviesComponent/Top10MoviesComponent";
const _ = require('lodash/number');

export default function FetchTop10MoviesComponent() {
    const queryClient = useQueryClient()

    const movieListQuery = useQuery(
        {
            queryFn: () => fetchTop10Movies(),
            queryKey: ['top10']
        },
        queryClient
    )

    switch (movieListQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <div >
                    <Top10MoviesComponent movies={movieListQuery.data}   />
                </div>
            )
        case 'error':
            return (
                <div>
                    <span className='text-white'>Произошла ошибка:</span>

                    <button className='text-white' onClick={() => movieListQuery.refetch()}>
                        Повторить запрос
                    </button>
                </div>
            )
    }
}