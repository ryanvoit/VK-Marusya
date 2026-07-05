import { MovieList } from "@/api/movies/types";
import { fetchTop10Movies } from "@/api/movies/fetches";
import { LinkMovie } from "@/components/Common/LinkMovie/LinkMovie";

const getMovies = async (): Promise<MovieList> => {
    const data = fetchTop10Movies()
    return data
}

export const Top10MoviesComponent = async () => {
    const movies = await getMovies()

    return (
        <div className="top-10">
            <h2 className="top-10__title">Top 10 Movies</h2>
            <div className="top-10__inner">
                <ul className="top-10__list">
                    {movies.map((movie, index) => (
                        <li className="top-10__item" key={movie.id}>
                            <LinkMovie 
                                id={movie.id}
                                title={movie.title}
                                posterUrl={movie.posterUrl}
                                index={index}
                                role='top-10'
                            />
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}