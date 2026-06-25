'use client'

import { useQuery } from "@tanstack/react-query"
import { fetchTop10Movies } from "@/api/movies/fetches";
import { Top10MoviesComponent } from "../Top10MoviesComponent/Top10MoviesComponent";

export default function FetchTop10MoviesComponent() {
    const movieListQuery = useQuery({
            queryFn: () => fetchTop10Movies(),
            queryKey: ['top10']
        })

    switch (movieListQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <Top10MoviesComponent movies={movieListQuery.data} />
            )
        case 'error':
            return (
                <div>
                    <span className='text-white'>Произошла ошибка:</span>

                    <button className='text-white' onClick={() => movieListQuery.refetch()}>
                        Повторить запрос
                    </button>
                </div >
            )
    }
}

