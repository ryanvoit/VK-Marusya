import { Movie } from "@/api/movies/types"
import { FC } from "react"

export interface AboutMovieProps {
    movie: Movie,
}

export const AboutMovieComponent: FC<AboutMovieProps> = ({ movie }) => {
    return (
        <div className="flex flex-col gap-[64px]">
            <h2 className="text-white text-[40px] font-bold">About the movie</h2>

            <div className="text-amber-400">
                {movie.title}
            </div>
        </div>
    )
}