import { MovieComponent } from "../../../Common/MovieComponent/MovieComponent"
import { Top10MoviesComponent } from "../Top10MoviesComponent/Top10MoviesComponent"

export default function MainPageComponent() {
    return (
            <div className="main-page">
                <MovieComponent role="random" />
                <Top10MoviesComponent />
            </div>
    )
}