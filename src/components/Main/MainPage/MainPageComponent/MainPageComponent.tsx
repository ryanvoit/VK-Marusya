'use client'

import './mainPageComponent.css'
import FetchRandomMovieComponent from "../FetchRandomMovieComponent/FetchRandomMovieComponent"
import { QueryClientProvider } from "@tanstack/react-query"
import FetchTop10MoviesComponent from "../FetchTop10MoviesComponent/FetchTop10MoviesComponent"
import { client } from '@/utils/client'

export default function MainPageComponent() {
    return (
        <QueryClientProvider client={client}>
            <div className="main-page">
                <FetchRandomMovieComponent />

                <FetchTop10MoviesComponent />
            </div>
        </QueryClientProvider>
    )
}