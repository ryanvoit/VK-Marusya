'use client'

import { client } from '@/utils/client'
import { QueryClientProvider } from '@tanstack/react-query';
import FetchGenresListComponent from '../FetchGenresListComponent/FetchGenresListComponent';
import './GenrePage.css'

export default function GenresPage() {
    return (
        <QueryClientProvider client={client}>
            <div className="genre-page">
                <h1 className='genre-page__title'>Movie Genres</h1>
                <FetchGenresListComponent />
            </div>
        </QueryClientProvider>
    );
}