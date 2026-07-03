'use client'

import { FetchMoviesByGenreComponent } from "../../../components/Main/GenrePage/FetchMoviesByGenreComponent/FetchMoviesByGenreComponent";
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from '@/api/client'

interface PageProps {
    params: Promise<{ genre: string }>
}

export default async function Page({ params }: PageProps) {
    const { genre } = await params

    return (
        <QueryClientProvider client={client}>
            <FetchMoviesByGenreComponent genre={genre} />
        </QueryClientProvider>
    )
}
  