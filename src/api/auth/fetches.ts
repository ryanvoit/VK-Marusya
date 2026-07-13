import { RegisterPayload, LoginInfo, ProfileInfo, profileDataScheme } from "./types"
import axios from "axios";

export const httpClient = axios.create({
    baseURL: 'https://cinemaguide.skillbox.cc',
    withCredentials: true
})

export function fetchRegister(info: RegisterPayload): Promise<void> {
    return httpClient.post('/user', {
        email: info.email,
        password: info.password,
        name: info.name,
        surname: info.surname
    }, {
        headers: { 'Content-Type': 'application/json' }
    }).then(() => undefined)
}

export function fetchLogin(info: LoginInfo): Promise<void> {
    return httpClient.post('/auth/login', {
        email: info.email,
        password: info.password,
    }, {
        headers: { 'Content-Type': 'application/json' }
    }).then(() => undefined)
}

export function fetchProfileData(): Promise<ProfileInfo>  {
    return httpClient.get('/profile')
    .then((response) => profileDataScheme.parse(response.data))
}

export function fetchLogOut(): Promise<void> {
    return httpClient.get('/auth/logout').then(() => undefined)
}
