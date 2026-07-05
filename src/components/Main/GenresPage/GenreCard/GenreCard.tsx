import { FC } from "react"
import Link from "next/link"
import { fetchGenreMovies } from "@/api/movies/fetches"
import { MovieList } from "@/api/movies/types"

export interface GenreCardProps {
    genre: string,
    index: number
}

const getGenreMovies = async (genre: string): Promise<MovieList> => {
    const data = await fetchGenreMovies(genre)
    return data
}

export const GenreCard: FC<GenreCardProps> = async ({ genre, index }) => {
    const movies = await getGenreMovies(genre)
    const src = movies[index].backdropUrl as string

    return (
        <Link href={`/genres/${genre}`} className="genre-card">
            <img className="genre-card__img" src={src} height={163} />
            <span className="genre-card__name">{genre[0].toUpperCase() + genre.slice(1)}</span>
        </Link>
    )
}