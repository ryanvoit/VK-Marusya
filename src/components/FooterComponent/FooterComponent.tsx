'use client'

import { Flex } from "antd"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

export default function FooterComponent() {
    return (
        <Flex justify="flex-end" gap={24}>
            <Link href='/'>
                <Flex justify="center" align="center" className="social-link">
                    <Image src={'/vk.svg'} alt={'vk'} width={18} height={10} className="social-link__icon"
                    />
                </Flex>
            </Link>
            <Link href='/'>
                <Flex justify="center" align="center" className="social-link">
                    <Image src={'/youtube.svg'} alt={'vk'} width={16} height={11} className="social-link__icon"
                    />
                </Flex>
            </Link>
            <Link href='/'>
                <Flex justify="center" align="center" className="social-link">
                    <Image src={'/ok.svg'} alt={'vk'} width={11} height={18} className="social-link__icon"
                    />
                </Flex>
            </Link>
            <Link href='/'>
                <Flex justify="center" align="center" className="social-link">
                    <Image src={'/telegram.svg'} alt={'vk'} width={17} height={14} className="social-link__icon"
                    />
                </Flex>
            </Link>
        </Flex>
    )
}