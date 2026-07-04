import { FC } from "react"
import { Icon } from "@/components/Common/Icon/Icon"

export interface SocialLinkProps {
    socialLinkInfo: 'telegram' | 'vk' | 'ok' | 'youtube'
}

export const SocialLink: FC<SocialLinkProps> = ({ socialLinkInfo }) => {
    return (
        <div className="social-link">
            <Icon role={socialLinkInfo} />
        </div>
    )

}