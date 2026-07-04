import Link from "next/link"
import { SocialLink } from "../SocialLink/SocialLink"

export default function FooterComponent() {
    return (
        <div className="footer__wrapper">
            <Link href='/'>
                <SocialLink socialLinkInfo='vk' />
            </Link>
            <Link href='/'>
                <SocialLink socialLinkInfo='youtube' />
            </Link>
            <Link href='/'>
                <SocialLink socialLinkInfo='ok' />
            </Link>
            <Link href='https://t.me/ryanvoit'>
                <SocialLink socialLinkInfo='telegram' />
            </Link>
        </div>
    )
}