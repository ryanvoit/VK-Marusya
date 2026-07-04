'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Icon } from '../Icon/Icon'
import { FC } from 'react'

export type ButtonProps = {
    role: 'renew'
} | {
    role: 'back',
    genre: string
}

export const Button: FC<ButtonProps> = (props) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    function refresh() {
        startTransition(() => router.refresh())
    }

    function back() {
        startTransition(() => router.back())
    }

    const btnClass = props.role == 'renew' ? 'movie__btn movie__btn--3' : 'genre-page__link'

    return (
        <button
            className={btnClass}
            disabled={isPending}
            onClick={props.role == 'renew' ? refresh : back}
        >
            <Icon role={props.role} />
            {props.role == 'back' && <h1 className="genre-page__title">{props.genre[0].toUpperCase() + props.genre.slice(1)}</h1>}
        </button>
    )
}
