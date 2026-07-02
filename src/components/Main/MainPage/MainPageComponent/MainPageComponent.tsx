// import FetchRandomMovieComponent from "../FetchRandomMovieComponent/FetchRandomMovieComponent"
// import { QueryClientProvider } from "@tanstack/react-query"
// import FetchTop10MoviesComponent from "../FetchTop10MoviesComponent/FetchTop10MoviesComponent"
// import { client } from '@/utils/client'
import { MovieComponent } from "../MovieComponent/MovieComponent"
import { Top10MoviesComponent } from "../Top10MoviesComponent/Top10MoviesComponent"

export default function MainPageComponent() {
    // <FetchRandomMovieComponent />
    return (
            <div className="main-page">
                <MovieComponent role="random" />

                <Top10MoviesComponent />
            </div>
    )
}