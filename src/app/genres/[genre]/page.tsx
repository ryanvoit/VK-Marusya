'use client'

import { FetchMoviesByGenreComponent } from "../../../components/Main/GenrePage/FetchMoviesByGenreComponent/FetchMoviesByGenreComponent";
import { useParams } from "next/navigation"
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from '@/api/client'

export default function Page() {
    const params = useParams<{ genre: string }>()

    return (
        <QueryClientProvider client={client}>
            <FetchMoviesByGenreComponent genre={params.genre} />
        </QueryClientProvider>
    )
}
  