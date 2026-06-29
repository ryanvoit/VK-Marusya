import { Movie } from "@/api/movies/types";
import { FC } from "react";
import '../../../../app/globals.css';
import Image from "next/image";
import runtimeConvertion from "@/utils/runtime";
import colorRating from "@/utils/colorRating";
const _ = require('lodash/math');
import './movieComponent.css'
import Link from "next/link";

export interface MovieProps {
    movie: Movie,
    renewFn?: () => void,
    role: 'random' | 'about'
}

export const MovieComponent: FC<MovieProps> = ({ movie, renewFn, role }) => {
    const ty = () => {
        console.log('ftghuthdgiutrf');
    }

    const ratingColor: React.CSSProperties = {
        backgroundColor: `${colorRating(movie.tmdbRating)}`
    }

    return (
        <div className="movie">
            <div className="movie__content">
                <div className="movie__info">
                    <div className="movie__basic-info">
                        <div className='movie__rating' style={ratingColor}>
                            <Image src={'/star.svg'} alt={'star'} width={16} height={16} />
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
                    <button className="movie__btn movie__btn--1" onClick={ty}>Trailer</button>
                    {role == 'random' && (
                        <Link href={`${movie.id}`} className="movie__btn movie__btn--2">About the movie</Link>
                    )}
                    <button className="movie__btn movie__btn--3" onClick={ty}>
                        <Image src={'/heart.svg'} alt={'heart'} width={24} height={24} />
                    </button>
                    {role == 'random' && (
                        <button className="movie__btn movie__btn--3" onClick={renewFn}>
                            <Image src={'/new.svg'} alt={'new'} width={24} height={24} />
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

