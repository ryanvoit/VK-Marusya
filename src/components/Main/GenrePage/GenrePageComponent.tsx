import { FC } from "react"
import { MovieList } from "@/api/movies/types"
import Link from "next/link"
import { fetchGenreMovies } from "@/api/movies/fetches"
import { Icon } from "@/components/Common/Icon/Icon"
import { LinkMovie } from "@/components/Common/LinkMovie/LinkMovie"

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
            <Link href='/genres' className='genre-page__link'>
                <Icon role='back' />
                <h1 className="genre-page__title">{genre[0].toUpperCase() + genre.slice(1)}</h1>
            </Link>
            <ul className="genre-page__list">
                {movies.map((movie) => (
                    <li className="genre-page__item" key={movie.id}>
                        <LinkMovie
                            id={movie.id}
                            title={movie.title}
                            posterUrl={movie.posterUrl}
                            role='genre-page'
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}