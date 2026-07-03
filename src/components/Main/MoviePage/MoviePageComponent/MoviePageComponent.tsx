import { MovieComponent } from "@/components/Common/MovieComponent/MovieComponent"
import { AboutMovieComponent } from "@/components/Main/MoviePage/AboutMovieComponent/AboutMovieComponent"
import { fetchMovieById } from "@/api/movies/fetches"
import { Movie } from "@/api/movies/types"

interface PageProps {
    id: string
}

const getMovieById = async(id: string): Promise<Movie> => {
    const data = fetchMovieById(id)
    return data
}

export default async function MoviePageComponent({ id }: PageProps) {
    const movie = await getMovieById(id)

    return (
        <div className="movie-page">
            <MovieComponent role="about" movie={movie} />
            <AboutMovieComponent  movie={movie} />
        </div>
    )
}