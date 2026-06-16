import { MovieList , movieListScheme } from "./types"
// import axios from "axios";



export default function fetchMovieList(): Promise<MovieList> {
    return ( 
    // axios.get
    fetch
    ('https://cinemaguide.skillbox.cc/movie')
    .then((res) => res.json())
    .then((data) => movieListScheme.parse(data))
    )
}