import { FC } from "react"
import "./GenreCard.css"
import Link from "next/link"

export interface GenreCardProps {
    genre: string,
    src: string,
}

export const GenreCard:FC<GenreCardProps> = ({ genre, src }) => {
    return (
        <Link href='/'>
            <div className="genre-card">
                <img className="genre-card__img" src={src} height={163} />
                <span className="genre-card__name">{genre[0].toUpperCase() + genre.slice(1)}</span>
            </div>
        </Link>
    )
}