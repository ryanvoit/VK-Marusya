import { useQuery } from "@tanstack/react-query"
import { fetchMovieById } from "@/api/movies/fetches";
import { MovieComponent } from "../../MainPage/MovieComponent/MovieComponent";
import { FC } from "react";
import { AboutMovieComponent } from "../AboutMovieComponent/AboutMovieComponent";

export interface FetchMovieByIdProps {
    id: string,
}

export const FetchMovieByIdComponent: FC<FetchMovieByIdProps> = ({ id }) => {
    const movieQuery = useQuery({
            queryFn: () => fetchMovieById(id),
            queryKey: ['movieById', id]
        })

    switch (movieQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <div className="flex flex-col gap-[40px] ">
                    <MovieComponent movie={movieQuery.data} role="about" />
                    <AboutMovieComponent movie={movieQuery.data} />
                </div>
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