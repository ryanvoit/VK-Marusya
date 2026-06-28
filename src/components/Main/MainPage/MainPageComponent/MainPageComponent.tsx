'use client'

import { Flex } from "antd"
import FetchRandomMovieComponent from "../FetchRandomMovieComponent/FetchRandomMovieComponent"
import { QueryClientProvider } from "@tanstack/react-query"
import FetchTop10MoviesComponent from "../FetchTop10MoviesComponent/FetchTop10MoviesComponent"
import { client } from '@/utils/client'

export default function MainPageComponent() {
    return (
        <QueryClientProvider client={client}>
            <Flex vertical gap={40}>
                <FetchRandomMovieComponent />

                <FetchTop10MoviesComponent />
            </Flex>
        </QueryClientProvider>
    )
}