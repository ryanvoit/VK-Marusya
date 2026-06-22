import { MovieList, movieListScheme, Movie, movieScheme, MovieGenres, movieGenresScheme } from "./types"
import axios from "axios";

export function fetchMovieList(): Promise<MovieList> {
    return (
        axios.get('https://cinemaguide.skillbox.cc/movie/')
            .then((response) => movieListScheme.parse(response.data))
    )
}

export function fetchTop10Movies(): Promise<MovieList> {
    return (
        axios.get('https://cinemaguide.skillbox.cc/movie/top10')
            .then((response) => movieListScheme.parse(response.data))
    )
}

export function fetchRandomMovie(): Promise<Movie> {
    return (
        axios.get('https://cinemaguide.skillbox.cc/movie/random')
            .then((response) => movieScheme.parse(response.data))
    )
}

export function fetchMovieGenres(): Promise<MovieGenres> {
    return (
        axios.get('https://cinemaguide.skillbox.cc/movie/genres')
            .then((response) => movieGenresScheme.parse(response.data))
    )
}

export function fetchGenreMovie(genre: string): Promise<MovieList> {
    return (
        axios.get(`https://cinemaguide.skillbox.cc/movie?count=20&genre=${encodeURIComponent(genre)}`)
            .then((response) => movieListScheme.parse(response.data))
    )
}