import { Movie } from "@/api/movies/types";
import { FC } from "react";
import '../../app/globals.css'
import { Flex } from "antd";
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
        <Flex className="movie" align="center" gap={20}>
            <Flex className="movie__content" gap={60}>
                <Flex className="movie__info" vertical gap={16}>
                    <Flex className="movie__basic-info" gap={16}>
                        <Flex gap={4} className='movie__rating' style={ratingColor} justify="center" align="center">
                            <Image src={'/star.svg'} alt={'star'} width={16} height={16} />
                            <p>{_.round(movie.tmdbRating, 1)}</p>
                        </Flex>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.genres[0]}</p>
                        <p>{runtimeConvertion(movie.runtime)}</p>
                    </Flex>
                    <h2 className="movie__title">{movie.title}</h2>
                    <p className="movie__plot">{movie.plot}</p>
                </Flex>
                <Flex gap={16} className="movie__btns">
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
                </Flex>
            </Flex>
            {movie.backdropUrl && (
                <img src={movie.backdropUrl} className="movie__image" width={680}></img>
            )}
        </Flex>
    )
}

