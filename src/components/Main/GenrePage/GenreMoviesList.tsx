import { FC } from "react"
import { MovieList } from '@/api/movies/types'
import { Icon } from "@/components/Common/Icon/Icon"
import Link from "next/link"
import { LinkMovie } from "@/components/Common/LinkMovie/LinkMovie"

interface GenreMoviesListProps {
    movies: MovieList,
    genre: string,
    addFn: () => void,
    hasMore: boolean
}

export const GenreMoviesList: FC<GenreMoviesListProps> = ({ movies, genre, addFn, hasMore }) => {
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
            {hasMore && (
                <button className="genre-page__btn" onClick={addFn}>Показать ещё</button>
            )}
        </div>
    )
}