'use client'

import { forwardRef, useState, useEffect, ChangeEventHandler } from "react"
import { Icon } from "../Icon/Icon"
import { fetchMoviesbySearch } from "@/api/movies/fetches"
import { MovieList } from "@/api/movies/types"
import { SearchDataComponent } from "@/components/Header/SearchDataComponent/SearchDataComponent"

export interface CustomInputProps {
    inputType: 'email' | 'password' | 'text',
    role: 'email' | 'password' | 'user' | 'search',
    placeholder: string,
    id: string,
    setter?: (value: string) => void,
    name?: string,
    onBlur?: ChangeEventHandler<HTMLInputElement>,
    onChange?: ChangeEventHandler<HTMLInputElement>,
    errorMessage?: string,
    additionalFn?: () => void
}

export const CustomInput = forwardRef<HTMLInputElement, CustomInputProps>(
    ({ inputType, role, placeholder, id, setter, name, onBlur, onChange, errorMessage, additionalFn }, ref) => {
        const customInputClass = id === 'search' ? 'custom-input custom-input--search' : 
        id === 'search-mobile' ? 'custom-input custom-input--search custom-input--search-2' : 'custom-input'

        const [input, setInput] = useState('')
        const [movies, setMovies] = useState<MovieList>([])

        const handleInput: ChangeEventHandler<HTMLInputElement> = (event) => {
            setInput(event.target.value)
            setter?.(event.target.value)
            onChange?.(event)
        }

        const handleClear = () => {
            setMovies([])
            setInput('')
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
                <input
                    ref={ref}
                    type={inputType}
                    id={id}
                    name={name}
                    placeholder={placeholder}
                    onChange={handleInput}
                    onBlur={onBlur}
                    value={input}
                    className="custom-input__field"
                />
                <Icon role={role} />
                {errorMessage && <span className="custom-input__error">{errorMessage}</span>}
                {id === 'search-mobile' && 
                    <button className="custom-input__btn-exit" onClick={additionalFn}>
                        <Icon role="cross-exit" />
                    </button>
                }
                {role === 'search' && <SearchDataComponent movies={movies} onSelect={handleClear} />}
            </div>
        )
    }
)

CustomInput.displayName = 'CustomInput'