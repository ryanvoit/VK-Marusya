'use client'

import { client } from '@/utils/client'
import { QueryClientProvider } from '@tanstack/react-query';
import FetchGenresListComponent from '../FetchGenresListComponent/FetchGenresListComponent';
import './GenrePageComponent.css'

export default function GenresPageComponent() {
    return (
        <QueryClientProvider client={client}>
            <div className="genres-page">
                <h1 className='genres-page__title'>Movie Genres</h1>
                <FetchGenresListComponent />
            </div>
        </QueryClientProvider>
    );
}