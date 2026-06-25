import { FC } from "react"
import { MovieList } from "@/api/movies/types"
import Link from "next/link"
import './genrePageComponent.css'
import Image from "next/image"

export interface GenrePageProps {
    movies: MovieList,
    genre: string
}

export const GenrePageComponent: FC<GenrePageProps> = ({ movies, genre }) => {
    return (
        <div className="genre-page">
            <Link href='/genres' className="genre-page__link" >
                <Image src='/back.svg' alt="back" width={40} height={40}></Image>
                <h1 className="genre-page__title">{genre[0].toUpperCase() + genre.slice(1)}</h1>
            </Link>

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