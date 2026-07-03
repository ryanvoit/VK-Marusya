import { MovieList } from "@/api/movies/types";
import Link from "next/link";
import { fetchTop10Movies } from "@/api/movies/fetches";

const getMovies = async(): Promise<MovieList> => {
    const data = fetchTop10Movies()
    return data
}

export const Top10MoviesComponent = async () => {
    const movies = await getMovies()

    return (
        <div className="top-10">
            <h2 className="top-10__title">Top 10 Movies</h2>
            <div className="top-10__inner">
                {movies.map((movie, index) => (
                    <Link className='top-10__link' href={`/${movie.id}`} key={movie.id} >
                        <div className='top-10__picture'>
                            <div className="top-10__number">
                                {index + 1}
                            </div>
                            {movie.posterUrl ? (
                                <img className="top-10__img" src={movie.posterUrl}/>
                            ) : (
                                <div className="top-10__movie-name">
                                    <span>{movie.title}</span>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    )
}