'use client'

import { FC } from "react"
import Image from "next/image"
import { useState } from "react"
import "./socialLink.css"

export interface SocialLinkProps {
    socialLinkInfo: socialLinkIcon
}

export const SocialLink: FC<SocialLinkProps> = ({ socialLinkInfo }) => {
    const[isBeingHovered, setIsHovered] = useState(false)
    const onMouseEnter = () => setIsHovered(true)
    const onMouseLeave = () => setIsHovered(false)

    return (
        <div className="social-link" onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
            {
                isBeingHovered ? (
                    <Image className="social-link__icon" src={`/${socialLinkInfo.alt}-hovered.svg`} alt={socialLinkInfo.alt} width={socialLinkInfo.width} height={socialLinkInfo.height}/>
                ) : (
                    <Image className="social-link__icon" src={`/${socialLinkInfo.alt}.svg`} alt={socialLinkInfo.alt} width={socialLinkInfo.width} height={socialLinkInfo.height} />
                )
            }
        </div>
    )

}