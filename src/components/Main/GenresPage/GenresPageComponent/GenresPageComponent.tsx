import { MovieGenres } from "@/api/movies/types";
import { fetchMovieGenres } from "@/api/movies/fetches";
import { GenreCard } from "../GenreCard/GenreCard";

const getGenres = async (): Promise<MovieGenres> => {
    const data = fetchMovieGenres()
    return data
}

export default async function GenresPageComponent() {
    const genres = await getGenres()

    return (
        <div className="genres-page">
            <h1 className='genres-page__title'>Movie Genres</h1>
            <ul className="genres-page__list">
                {genres.map((genre, index) => (
                    <li className="genres-page__item" key={genre}>
                        <GenreCard genre={genre} index={index} />
                    </li>
                ))}
            </ul>
        </div>
    );
}