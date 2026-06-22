import { Movie } from "@/api/movies/types";
import { FC } from "react";
import '../../app/globals.css'
import { Flex } from "antd";
import Image from "next/image";
import runtimeConvertion from "@/utils/runtime";
import colorRating from "@/utils/colorRating";
const _ = require('lodash/math');
import './randomMovieComponent.css'

export interface MovieProps {
    movie: Movie,
    renewFn: () => void
}

export const RandomMovieComponent: FC<MovieProps> = ({ movie, renewFn }) => {
    const ty = () => {
        console.log('ftghuthdgiutrf');
    }

    const ratingColor: React.CSSProperties = {
        backgroundColor: `${colorRating(movie.tmdbRating)}`
    }

    return (
        <Flex className="random-movie" align="center" gap={20}>
            <Flex className="random-movie__content" gap={60} vertical>
                <Flex className="random-movie__info" vertical gap={16}>
                    <Flex className="random-movie__basic-info" gap={16}>
                        <Flex gap={4} className='random-movie__rating' style={ratingColor} justify="center" align="center">
                            <Image src={'/star.svg'} alt={'star'} width={16} height={16} />
                            <p>{_.round(movie.tmdbRating, 1)}</p>
                        </Flex>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.genres[0]}</p>
                        <p>{runtimeConvertion(movie.runtime)}</p>
                    </Flex>
                    <h2 className="random-movie__title">{movie.title}</h2>
                    <p className="random-movie__plot">{movie.plot}</p>
                </Flex>
                <Flex gap={16} className="random-movie__btns">
                    <button className="random-movie__btn random-movie__btn--1" onClick={ty}>Trailer</button>
                    <button className="random-movie__btn random-movie__btn--2" onClick={ty}>About the movie</button>
                    <button className="random-movie__btn random-movie__btn--3" onClick={ty}>
                        <Image src={'/heart.svg'} alt={'heart'} width={24} height={24} />
                    </button>
                    <button className="random-movie__btn random-movie__btn--3" onClick={renewFn}>
                        <Image src={'/new.svg'} alt={'new'} width={24} height={24} />
                    </button>
                </Flex>
            </Flex>
            <>
                {movie.backdropUrl && (
                    <img src={movie.backdropUrl} width={680} height={552} className="random-movie__image"></img>
                )}
            </>
        </Flex>
    )
}

