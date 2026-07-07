/*
'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Icon } from '../Icon/Icon'
import { FC } from 'react'

export type ButtonProps = {
    role: 'renew'
} | {
    role: 'trailer',
    // url: string
}

export const Button: FC<ButtonProps> = (props) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    function refresh() {
        startTransition(() => router.refresh())
    }

    function openTrailer() {
        router.push('#trailer')
    }

    return (
        <>
            <button
                className={props.role == 'renew' ? 'movie__btn movie__btn--2' : "movie__btn"}
                disabled={isPending}
                onClick={props.role == 'renew' ? refresh : openTrailer}
            >
                {props.role == 'renew' ? <Icon role='renew' /> : <span>Trailer</span>}
            </button>
            {props.role == 'trailer' && <Trailer />}
        </>
    )
}

const Trailer = () => {
    return (
        <>
        <a className="movie__btn" href='#trailer'>Trailer</a>
        <iframe 
            id='trailer' 
            className='trailer'
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/g7TPKR1AjHY?si=SacRE198ZQB-d5Y6" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
        </>
    )
}
    */
