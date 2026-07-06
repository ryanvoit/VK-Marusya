import { MovieList } from "@/api/movies/types"
import Link from "next/link"
import { FC } from "react"
import { Icon } from "@/components/Common/Icon/Icon"
import runtimeConvertion from "@/utils/runtime";
import colorRating from "@/utils/colorRating";
import round from 'lodash/round'

export interface SearchDataProps {
    movies: MovieList,
    onSelect: () => void
}

export interface SearchDataCardProps {
    title: string,
    id: number,
    src?: string | null,
    tmdbRating: number,
    releaseYear?: number | null,
    mainGenre: string,
    runtime: number,
    clearFn: () => void
}

export const SearchDataCard: FC<SearchDataCardProps> = ({ title, id, src, tmdbRating, releaseYear, mainGenre, runtime, clearFn }) => {

    const ratingColor: React.CSSProperties = {
        backgroundColor: `${colorRating(tmdbRating)}`
    }

    return (
        <Link href={`/${id}`} className="search-card" onClick={clearFn}>
            {src ? (
                <img src={src} width={40} height={52} alt='poster' className="search-card__image" />
            ) : (
                <span className="search-card__image search-card__image--no">No image</span >
            )}
            <div className="search-card__content">
                <div className="search-card__basic-info">
                    <div className='search-card__rating' style={ratingColor}>
                        <Icon role='star--little' />
                        <p>{round(tmdbRating, 1)}</p>
                    </div>
                    <p>{releaseYear}</p>
                    <p>{mainGenre}</p>
                    <p>{runtimeConvertion(runtime)}</p>
                </div>
                <h3 className="search-card__title">{title}</h3>
            </div>
        </Link>
    )
}

export const SearchDataComponent: FC<SearchDataProps> = ({ movies, onSelect }) => {
    const searchResultsClass = movies.length !== 0 ? "search-results" : "search-results search-results--empty"
    return (
        <div className={searchResultsClass}>
            <ul className="search-results__list">
                {movies.map((movie) => (
                    <li key={movie.id} className="search-results__item">
                        <SearchDataCard
                            title={movie.title}
                            id={movie.id}
                            src={movie.posterUrl ?? undefined}
                            tmdbRating={movie.tmdbRating}
                            releaseYear={movie.releaseYear}
                            mainGenre={movie.genres[0]}
                            runtime={movie.runtime}
                            clearFn={onSelect}
                        />
                    </li>
                ))}
            </ul>
        </div>
    )
}