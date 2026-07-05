import { MovieList } from "@/api/movies/types"
import Link from "next/link"
import { FC } from "react"

export interface SearchDataProps {
    movies: MovieList
}

export interface SearchDataCardProps {
    title: string,
    id: number,
    src?: string | null,
    tmdbRating: number,
    releaseYear?: number | null,
    mainGenre: string,
    runtime: number
}

export const SearchDataCard: FC<SearchDataCardProps> = ({ title, id, src, tmdbRating, releaseYear, mainGenre, runtime }) => {
    return (
        <Link href={`/${id}`} className="search-card">
            <h3 className="search-card__title">{title}</h3>
        </Link>
    )
}

export const SearchDataComponent: FC<SearchDataProps> = ({ movies }) => {
    console.log(movies);
    const searchResultsClass = movies.length !== 0 ? "search-results" : "search-results search-results--empty"
    return (
        <div className={searchResultsClass}>
            <ul className="search-results__list">
                {movies.map((movie) => (
                    <li key={movie.id} className="search-results__item">
                        <SearchDataCard
                            title={movie.title}
                            id={movie.id}
                            src={movie.posterUrl}
                            tmdbRating={movie.tmdbRating}
                            releaseYear={movie.releaseYear}
                            mainGenre={movie.genres[0]}
                            runtime={movie.runtime}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}