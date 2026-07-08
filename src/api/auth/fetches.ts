import { RegisterInfo, LoginInfo, ProfileInfo } from "./types"
import axios from "axios";

export function fetchRegister(info: RegisterInfo): Promise<void> {
    return (
        axios.post('https://cinemaguide.skillbox.cc/user', {
            email: info.email,
            password: info.password,
            name: info.name,
            surname: info.surname
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => undefined)
    )
}

export function fetchLogin(info: RegisterInfo): Promise<void> {
    return (
        axios.post('https://cinemaguide.skillbox.cc/user', {
            email: info.email,
            password: info.password,
            name: info.name,
            surname: info.surname
        }, {
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(() => undefined)
    )
}

export function fetchGenreMovies(genre: string): Promise<MovieList> {
    return (
        axios.get(`https://cinemaguide.skillbox.cc/movie?count=20&genre=${encodeURIComponent(genre)}`)
            .then((response) => movieListScheme.parse(response.data))
    )
}
