import { FC } from "react"
import { MovieList } from "@/api/movies/types"
import Link from "next/link"
import { Button } from "@/components/Common/Button/Button"
import { fetchGenreMovies } from "@/api/movies/fetches"

export interface GenrePageProps {
    genre: string
}

const getMovies = async (genre: string): Promise<MovieList> => {
    const data = await fetchGenreMovies(genre)
    return data
}

export const GenrePageComponent: FC<GenrePageProps> = async ({ genre }) => {
    const movies = await getMovies(genre)

    return (
        <div className="genre-page">
            <Button role="back" genre={genre} />
            <ul className="genre-page__list">
                {movies.map((movie) => (
                    <li className="genre-page__item" key={movie.id}>
                        <Link href={`/${movie.id}`}>
                        <div className="genre-page__inner">
                            {movie.posterUrl ? (
                                <img src={movie.posterUrl} className="genre-page__image" />
                            ) : (
                                <div className="genre-page__name">
                                    <span>{movie.title}</span>
                                </div>
                            )}
                        </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}