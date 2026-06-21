import { MovieGenres } from "@/api/movies/types";
import { FC } from "react";
import { FetchGenreItemComponent } from "../FetchGenreItemComponent/FetchGenreItemComponent";
import './MovieGenresComponent.css'


export interface MovieProps {
    genres: MovieGenres,
}

export const MovieGenresComponent: FC<MovieProps> = ({ genres }) => {
    return (
            <ul className="genres-list">
                { genres.map((genre, index) => (
                    <li className="genres-list__item" key={genre}>
                        <FetchGenreItemComponent genre={genre} index={index}  />
                    </li>
                ))}
            </ul>
    )
}