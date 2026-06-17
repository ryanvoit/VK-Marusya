import { Movie } from "@/api/movies/types";
import { FC } from "react";
import '../../app/globals.css'
import { Flex } from "antd";
import Image from "next/image";
import runtimeConvertion from "@/utils/runtime";
import colorRating from "@/utils/colorRating";
const _ = require('lodash/math');

export interface MovieProps {
    movie: Movie,
    renewFn: () => void
}

export const RandomMovieComponent: FC<MovieProps> = ({ movie, renewFn }) => {
    const ty = () => {
        console.log('ftghuthdgiutrf');
    }

    return (
        <Flex align="center" className="relative min-h-[400px]" gap={20}>
            <Flex className="w-[580px]" gap={60} vertical>
                <Flex vertical gap={16}>
                    
                    <Flex className="text-[18px] text-[#FFFFFFB2]" gap={16}>
                        <Flex gap={4} className={`${colorRating(movie.tmdbRating)} w-[70px] rounded-[16px]`} justify="center" align="center">
                            <Image
                                src={'/star.svg'}
                                alt={'star'}
                                width={16}
                                height={16}
                            />
                            <p>{_.round(movie.tmdbRating, 1)}</p>
                        </Flex>
                        <p>{movie.releaseYear}</p>
                        <p>{movie.genres[0]}</p>
                        <p>{runtimeConvertion(movie.runtime)}</p>
                    </Flex>
                    <h2 className="font-bold text-[48px]/[56px] text-white">{movie.title}</h2>
                    <p className="text-[24px]/[32px] text-[#FFFFFFB2]">{movie.plot}</p>
                </Flex>
                <Flex gap={16} className="h-[56px]">
                    <button className="bg-[#333333] w-[171px] rounded-[28px] font-bold text-white text-[18px] border-[#00000066] border-[1px] hover:bg-[#67A5EB] transition-[background-color] transition-[300] ease-in" onClick={ty}>Trailer</button>
                    <button className="bg-[#333333] w-[183px] rounded-[28px] font-bold text-white text-[18px] border-[1px] hover:bg-[#67A5EB] border-[#00000066] transition-[background-color] transition-[300] ease-in" onClick={ty}>About the movie</button>
                    <button className="bg-[#333333] w-[68px] flex justify-center align-center rounded-[28px] font-bold text-white text-[18px] border-[1px] border-[#00000066] hover:bg-[#67A5EB] transition-[background-color] transition-[300] ease-in" onClick={ty}>
                        <Image src={'/heart.svg'} alt={'heart'} width={24} height={24} />
                    </button>
                    <button className="bg-[#333333] w-[68px] flex justify-center align-center rounded-[28px] font-bold text-white text-[18px] border-[1px] border-[#00000066] hover:bg-[#67A5EB] transition-[background-color] transition-[300] ease-in" onClick={renewFn}>
                        <Image src={'/new.svg'} alt={'new'} width={24} height={24} />
                    </button>
                </Flex>
            </Flex>
            {movie.backdropUrl && (
                <img src={movie.backdropUrl} width={680} height={552} className="absolute top-0 left-[600px] rounded-[16px]"></img>
            )}
        </Flex>
    )
}

