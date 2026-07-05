import Link from "next/link"
import { Icon } from "@/components/Common/Icon/Icon"

interface LinkInfo {
    socialLinkInfo: 'vk' | 'youtube' | 'ok' | 'telegram',
    href: string
}

type LinkInfoList = LinkInfo[]

export default function FooterComponent() {
    const LinkInfo:LinkInfoList = [{
        socialLinkInfo: 'vk', 
        href: '/'
    }, {
        socialLinkInfo: 'youtube', 
        href: '/'
    }, {
        socialLinkInfo: 'ok', 
        href: '/'
    }, {
        socialLinkInfo: 'telegram', 
        href: 'https://t.me/ryanvoit'
    }]
    return (
        <div className="footer__wrapper">
            {LinkInfo.map((link) => (
                <Link href={link.href} className="social-link" key={link.socialLinkInfo}>
                    <Icon role={link.socialLinkInfo} />
                </Link>
            ))}
        </div>
    )
}