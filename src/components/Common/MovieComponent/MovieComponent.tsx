import { Movie } from "@/api/movies/types";
import { FC } from "react";
import runtimeConvertion from "@/utils/runtime";
import colorRating from "@/utils/colorRating";
const _ = require('lodash/math');
import Link from "next/link";
import { fetchRandomMovie } from "@/api/movies/fetches";
import { Icon } from "../Icon/Icon";

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

   //  <button className="movie__btn movie__btn--3" 
   // onClick={getMovie}>
    //   <Image src={'/renew.svg'} alt={'new'} width={24} height={24} />
  // </button>

    return (
        <div className="movie">
            <div className="movie__content">
                <div className="movie__info">
                    <div className="movie__basic-info">
                        <div className='movie__rating' style={ratingColor}>
                            <Icon role='star' />
                            <p>{_.round(movie.tmdbRating, 1)}</p>
                        </div>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.genres[0]}</p>
                        <p>{runtimeConvertion(movie.runtime)}</p>
                    </div>
                    <h2 className="movie__title">{movie.title}</h2>
                    <p className="movie__plot">{movie.plot}</p>
                </div>
                <div className="movie__btns">
                    <button className="movie__btn movie__btn--1">Trailer</button>
                    {props.role !== 'about' && (
                        <Link href={`${movie.id}`} className="movie__btn movie__btn--2">About the movie</Link>
                    )}
                    <button className="movie__btn movie__btn--3">
                        <Icon role='heart' />
                    </button>
                    {props.role == 'random' && (
                        <button className="movie__btn movie__btn--3">
                            <Icon role='renew' />
                        </button>
                    )}
                </div>
            </div>
            {movie.backdropUrl && (
                <img src={movie.backdropUrl} className="movie__image" width={680}></img>
            )}
        </div>
    )
}

