import Link from "next/link"
import { FC } from "react"
import { ButtonDeleteFavourite } from "../ButtonDeleteFavourite/ButtonDeleteFavourite"

interface LinkMovieImageProps {
    title: string,
    posterUrl?: string | null
}

type LinkMovieProps = LinkMovieImageProps & (
    | {
        role: 'genre-page' | 'favourite',
        id: number
    }
    | {
        role: 'top-10',
        index: number,
        id: number
    }
)

export const LinkMovieImage: FC<LinkMovieImageProps> = ({ title, posterUrl }) => {
    return (
        <>
            {posterUrl ? (
                <img className="link-movie__img" src={posterUrl} />
            ) : (
                <span className="link-movie__title"> {title} </span >
            )}
        </>
    )
}

export const LinkMovie: FC<LinkMovieProps> = (props) => {
    return (
        <Link href={`/${props.id}`} className='link-movie'>
            {props.role == 'top-10' && (
                <div className="link-movie__number">
                    {props.index + 1}
                </div> 
            )}
            { props.role == 'favourite' && <ButtonDeleteFavourite id={String(props.id)} />}
            <LinkMovieImage posterUrl={props.posterUrl} title={props.title} />
        </Link>
    )
}