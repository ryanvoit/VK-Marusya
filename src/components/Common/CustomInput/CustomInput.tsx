'use client'

import { FC, useState, useEffect } from "react"
import { Icon } from "../Icon/Icon"
import { ChangeEventHandler } from "react"
import { fetchMoviesbySearch } from "@/api/movies/fetches"
import { MovieList } from "@/api/movies/types"
import { SearchDataComponent } from "@/components/Header/SearchDataComponent/SearchDataComponent"

export interface CustomInputProps {
    btnType: 'email' | 'password' | 'text',
    role: 'email' | 'password' | 'user' | 'search',
    placeholder: string,
    id: string,
}

export const CustomInput: FC<CustomInputProps> = ({ btnType, role, placeholder, id }) => {
    const customInputClass = role=='search' ? 'custom-input custom-input--search' : 'custom-input'

    const [input, setInput] = useState('')
    const [movies, setMovies] = useState<MovieList>([])

    const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
        setInput(event.target.value)
    } 

    useEffect(() => {
        if (role !== 'search' || input.trim() === '') {
            setMovies([])
            return
        }

        const timer = setTimeout(async () => {
            const data = await fetchMoviesbySearch(input)
            setMovies(data)
        }, 300)

        return () => clearTimeout(timer)
    }, [input, role])

    return (
        <div className={customInputClass}>
            <input type={btnType} id={id} placeholder={placeholder} onChange={handleInput} className="custom-input__field" />
            <Icon role={role} />
            { role=='search' && <SearchDataComponent movies={movies} />}
        </div>
    )
}