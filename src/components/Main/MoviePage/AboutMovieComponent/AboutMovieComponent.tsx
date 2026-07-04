import { Movie } from "@/api/movies/types"
import { FC } from "react"

export interface AboutMovieProps {
    movie: Movie
}

const AboutItem = ({ name, value }: { name: string; value?: string | number }) => {
    if (!value) return null
    return (
        <li className="about__content-item">
            <div className="about__line">
                <span className="about__name">{name}</span>
                <span className="about__value">{value}</span>
            </div>
        </li>
    )
}

export const AboutMovieComponent: FC<AboutMovieProps> = ({ movie }) => {
    const items = [
        { name: 'The original language', value: movie.language ?? undefined },
        { name: 'The budget',            value: movie.budget ? `${movie.budget} $` : undefined  },
        { name: 'The revenue',           value: movie.revenue ? `${movie.revenue} $` : undefined },
        { name: 'The Director',          value: movie.director ?? undefined },
        { name: 'The Production',        value: movie.production ?? undefined },
        { name: 'The Awards',            value: movie.awardsSummary ?? undefined },
    ]
    
    return (
        <div className="about">
            <h2 className="about__title">About the movie</h2>
            <ul className="about__content-list">
               {items.map(({ name, value }) => (
                    <AboutItem key={name} name={name} value={value} />
                ))}
            </ul>
        </div>
    )
}