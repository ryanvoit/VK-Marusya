import { Movie } from "@/api/movies/types"
import { FC } from "react"
import './aboutMovieComponent.css'

export interface AboutMovieProps {
    movie: Movie,
}

export const AboutMovieComponent: FC<AboutMovieProps> = ({ movie }) => {

    return (
        <div className="about">
            <h2 className="about__title">About the movie</h2>

            <ul className="about__content-list">
                <li className="about__content-item">
                    <div className="about__line">
                        <span className="about__name">The original language</span>
                        <span className="about__value">{movie.language}</span>
                    </div>
                </li>
                {movie.budget && (
                    <li className="about__content-item">
                        <div className="about__line">
                            <span className="about__name">The budget</span>
                            <span className="about__value">{movie.budget} $</span>
                        </div>
                    </li>
                )}
                {movie.revenue && (
                    <li className="about__content-item">
                        <div className="about__line">
                            <span className="about__name">The revenue</span>
                            <span className="about__value">{movie.revenue} $</span>
                        </div>
                    </li>
                )}
                {movie.director && (
                    <li className="about__content-item">
                        <div className="about__line">
                            <span className="about__name">The Director</span>
                            <span className="about__value">{movie.director}</span>
                        </div>
                    </li>
                )}
                {movie.production && (
                    <li className="about__content-item">
                        <div className="about__line">
                            <span className="about__name">The Production</span>
                            <span className="about__value">{movie.production}</span>
                        </div>
                    </li>
                )}
                {movie.awardsSummary && (
                    <li className="about__content-item">
                        <div className="about__line">
                            <span className="about__name">The Awards</span>
                            <span className="about__value">{movie.awardsSummary}</span>
                        </div>
                    </li>
                )}
            </ul>
        </div>
    )
}