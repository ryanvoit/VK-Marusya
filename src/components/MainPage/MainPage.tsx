'use client'

import { useQuery } from "@tanstack/react-query"
import { QueryClient } from "@tanstack/react-query";
import fetchMovieList from "@/api/movies/fetches";

export default function MainPage() {

    const queryClient = new QueryClient()

    const movieListQuery = useQuery(
        {
            queryFn: () => fetchMovieList(),
            queryKey: ['posts']
        },
        queryClient
    )

    switch (movieListQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)

        case 'success':
            return (
                <div className='text-white'>
                    {`${JSON.stringify(movieListQuery.data[5].title)}`}
                </div>
            )
            
            // {`${movieListQuery.data[5]} `}

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

    // return (
    // <div className="pl-[80px]">
    //  <h1
    //  className='text-[36px] text-white '
    //  >
    //       Main Page
    //  </h1>



    //  </div>
    // );
}