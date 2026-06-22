import { useQuery } from "@tanstack/react-query"
import { fetchMovieGenres } from "@/api/movies/fetches";
import { MovieGenresComponent } from "../MovieGenresComponent/MovieGenresComponent";

export default function FetchGenresListComponent() {
    const movieQuery = useQuery({
            queryFn: () => fetchMovieGenres(),
            queryKey: ['movieGenres']
        })

    switch (movieQuery.status) {
        case 'pending':
            return (<p className='text-white'>Loading...</p>)
        case 'success':
            return (
                <MovieGenresComponent genres={movieQuery.data} />
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