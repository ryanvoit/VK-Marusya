'use client'

import { FetchMovieByIdComponent } from "@/components/FetchMovieById/FetchMovieById";
import { useParams } from "next/navigation"
import { QueryClientProvider } from "@tanstack/react-query";
import { client } from '@/utils/client'

export default function Page() {
    const params = useParams<{ id: string }>()

    return (
        <QueryClientProvider client={client}>
            <FetchMovieByIdComponent id={params.id} />
        </QueryClientProvider>
    )
}
