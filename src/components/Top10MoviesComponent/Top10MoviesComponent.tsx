import { MovieList } from "@/api/movies/types";
import { FC } from "react";
import '../../app/globals.css'
import { Flex } from "antd";
import Link from "next/link";
const _ = require('lodash/math');

export interface MovieProps {
    movies: MovieList
}

export const Top10MoviesComponent: FC<MovieProps> = ({ movies }) => {
    const ty = () => {
        console.log('ftghuthdgiutrf');
    }

    return (
        <div className="mb-[120px]">
            <h2 className="text-[40px]/[48px] font-bold text-white mb-[64px]">Top 10 Movies</h2>
            <Flex wrap gap={40}>
                {movies.map((movie, index) => (
                    <Link href='/genres' key={movie.id} >
                        <div className='relative before:absolute before:w-[62px] before:h-[48px] before:flex before:justify-center 
                        before:items-center before:text-[24px]/[32px] before:top-[-12px] before:left-[-12px] before:rounded-[50px]
                        before:bg-white before:text-[#6A5DC2] font-bold'>
                            {movie.posterUrl ? (
                                <img src={movie.posterUrl} width={224} height={336} className="rounded-[16px] " />
                            ) : (
                                <div className="w-[224px] h-[336px] text-[20px] bg-white flex items-center justify-center text-black rounded-[16px] ">
                                    <span>{movie.title}</span>
                                </div>
                            )}
                        </div>
                    </Link>
                ))}
            </Flex>
        </div>
    )
}