'use client'

import { Flex } from "antd"
import FetchRandomMovieComponent from "../FetchRandomMovieComponent/FetchRandomMovieComponent"
import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import FetchTop10MoviesComponent from "../FetchTop10MoviesComponent/FetchTop10MoviesComponent"

export default function MainPage() {
    const client = new QueryClient()

    return (
        <QueryClientProvider client={client}>
            <Flex vertical gap={40}>
                <FetchRandomMovieComponent />

                <FetchTop10MoviesComponent />
            </Flex>
        </QueryClientProvider>
    )
}