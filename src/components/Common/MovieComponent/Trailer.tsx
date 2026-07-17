'use client'

import { FC } from "react"
import { Icon } from "../Icon/Icon"
import { useState } from 'react'

export interface TrailerProps {
    url: string
}

export const Trailer: FC<TrailerProps> = ({ url }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <>
            <button className="movie__btn movie__btn--1" onClick={() => setIsOpen(true)}>
                Trailer
            </button>

            {isOpen && (
                <div className="trailer">
                    <div className="trailer__window">
                        <iframe
                            className="trailer__player"
                            src={`https://www.youtube.com/embed/${url}`}
                            title="YouTube video player"
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            referrerPolicy="strict-origin-when-cross-origin"
                            allowFullScreen
                        />
                        <button className="trailer__exit" onClick={() => setIsOpen(false)}>
                            <Icon role="cross" />
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}