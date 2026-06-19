import { Flex } from "antd"
import Link from "next/link"
import { SocialLink } from "../SocialLink/SocialLink"

export default function FooterComponent() {
    return (
        <Flex justify="flex-end" gap={24}>
            <Link href='/'>
                <SocialLink socialLinkInfo={{alt: 'vk', width: 18, height: 10 }} />
            </Link>
            <Link href='/'>
                <SocialLink socialLinkInfo={{alt: 'youtube', width: 16, height: 11 }} />
            </Link>
            <Link href='/'>
                <SocialLink socialLinkInfo={{alt: 'ok', width: 11, height: 18 }} />
            </Link>
            <Link href='https://t.me/ryanvoit'>
                <SocialLink socialLinkInfo={{alt: 'telegram', width: 17, height: 14 }} />
            </Link>
        </Flex>
    )
}