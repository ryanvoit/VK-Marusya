'use client'

import { useRouter } from 'next/navigation'
import { useTransition } from 'react'
import { Icon } from '../Icon/Icon'

export const ButtonRenew = () => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()

    function refresh() {
        startTransition(() => router.refresh())
    }

    return (
        <button
            className='movie__btn movie__btn--2'
            disabled={isPending}
            onClick={refresh}
        >
            <Icon role='renew' />
        </button>
    )
}
