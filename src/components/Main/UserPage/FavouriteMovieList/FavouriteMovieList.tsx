import { MovieList } from "@/api/movies/types"
import { FC } from "react"
import { LinkMovie } from "@/components/Common/LinkMovie/LinkMovie"

interface FavouriteMovieListProps {
    movies: MovieList
}

export const FavouriteMovieList: FC<FavouriteMovieListProps> = ({ movies }) => {
    return (
        <div className="favourite">
            <ul className="favourite__list">
                {movies.map((movie) => (
                    <li className="favourite__item" key={movie.id}>
                        <LinkMovie
                            id={movie.id}
                            title={movie.title}
                            posterUrl={movie.posterUrl}
                            role='favourite'
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}