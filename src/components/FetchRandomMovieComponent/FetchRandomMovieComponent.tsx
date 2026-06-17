'use client'

import { useQuery, useQueryClient } from "@tanstack/react-query"
import fetchMovieList from "@/api/movies/fetches";
import { RandomMovieComponent } from "../RandomMovieComponent/RandomMovieComponent";
import { useState } from "react";
const _ = require('lodash/number')

export default function FetchRandomMovieComponent() {
    const queryClient = useQueryClient()

    const movieListQuery = useQuery(
        {
            queryFn: () => fetchMovieList(),
            queryKey: ['movies']
        },
        queryClient
    )

    const [movieNumber, setMovieNumber] = useState(_.random(0, 49))

    const renewMovie = () => {
        setMovieNumber(_.random(0, 49))
    }

    switch (movieListQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <RandomMovieComponent movie={movieListQuery.data[movieNumber]} renewFn={renewMovie}  />
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