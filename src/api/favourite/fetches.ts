import { MovieList, movieListScheme } from "../movies/types"
import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'https://cinemaguide.skillbox.cc',
    withCredentials: true
})

export function fetchFavouriteAdd(id: string): Promise<void> {
    return httpClient.post('/favorites', {
        id: id,
    }, {
        headers: { 'Content-Type': 'application/json' }
    }).then(() => undefined)
}

export function fetchFavouriteMovies(): Promise<MovieList> {
    return httpClient.get('/favorites', {
        headers: { 'Content-Type': 'application/json' }
    }).then((response) => movieListScheme.parse(response.data))
}

export function fetchFavouriteDelete(id: string): Promise<void> {
    return httpClient.delete(`/favorites/${id}`, {
        headers: { 'Content-Type': 'application/json' }
    }).then(() => undefined)
}