import { Movie } from "@/api/movies/types";
import { FC } from "react";
import runtimeConvertion from "@/utils/runtime";
import colorRating from "@/utils/colorRating";
import Link from "next/link";
import { fetchRandomMovie } from "@/api/movies/fetches";
import { Icon } from "../Icon/Icon";
import round from 'lodash/round'
import { ButtonRenew } from "@/components/Common/MovieComponent/ButtonRenew";
import { Trailer } from "./Trailer";
import { ButtonFavourite } from "./ButtonFavourite";

export type MovieProps =
    | { role: 'random' }
    | { role: 'about', movie: Movie }

const getRandomMovie = async(): Promise<Movie> => {
    const data = fetchRandomMovie()
    return data
}

export const MovieComponent: FC<MovieProps> = async (props) => {

    const movie = props.role=='random' ? await getRandomMovie() : props.movie

    const ratingColor: React.CSSProperties = {
        backgroundColor: `${colorRating(movie.tmdbRating)}`
    }

    return (
        <div 
            className={movie.backdropUrl ? "movie" : "movie movie--no-backdropURL"}
        >
            <div className="movie__content">
                <div className="movie__info">
                    <div className="movie__basic-info">
                        <div className='movie__rating' style={ratingColor}>
                            <Icon role='star' />
                            <p>{round(movie.tmdbRating, 1)}</p>
                        </div>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.genres[0]}</p>
                        <p>{runtimeConvertion(movie.runtime)}</p>
                    </div>
                    <h2 className="movie__title">{movie.title}</h2>
                    <p className="movie__plot">{movie.plot}</p>
                </div>
                <div className={props.role !== 'about' ? "movie__btns" : "movie__btns movie__btns--about"}>
                    {movie.trailerYouTubeId && <Trailer url={movie.trailerYouTubeId} /> }
                    {props.role !== 'about' && (
                        <Link href={`${movie.id}`} className="movie__btn movie__btn--2">About the movie</Link>
                    )}
                    <ButtonFavourite idMovie={String(movie.id)} />
                    {props.role == 'random' && <ButtonRenew/> }
                </div>
            </div>
            {movie.backdropUrl && (
                <img src={movie.backdropUrl} className="movie__image"  alt='Movie image'/>
            )}
        </div>
    )
}

