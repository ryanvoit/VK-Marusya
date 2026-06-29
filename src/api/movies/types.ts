import z from "zod"

export const movieScheme = z.object({
    id: z.number(),
    title: z.string(),
    originalTitle: z.string().nullable().optional(),
    language: z.string().nullable().optional(),
    releaseYear: z.number().nullable().optional(),
    releaseDate: z.string().nullable().optional(),
    genres: z.array(z.string()).default([]),
    plot: z.string().nullable().optional(),
    runtime: z.number().catch(0), // если придет некорректное число, вернет 0
    budget: z.string().nullable().optional(),
    revenue: z.string().nullable().optional(),
    homepage: z.string().nullable().optional(),
    status: z.string().nullable().optional(),
    posterUrl: z.string().nullable().optional(), // Важно: может быть null
    backdropUrl: z.string().nullable().optional(),
    trailerUrl: z.string().nullable().optional(),
    trailerYouTubeId: z.string().nullable().optional(),
    tmdbRating: z.number().catch(0),
    searchL: z.string().nullable().optional(),
    keywords: z.array(z.string()).default([]),
    countriesOfOrigin: z.array(z.string()).default([]),
    languages: z.array(z.string()).default([]),
    cast: z.array(z.string()).default([]),
    director: z.string().nullable().optional(),
    production: z.string().nullable().optional(),
    awardsSummary: z.string().nullable().optional(),
});


export type Movie = z.infer<typeof movieScheme>

export const movieListScheme = z.array(movieScheme)

export type MovieList = z.infer<typeof movieListScheme>

export const movieGenresScheme = z.array(z.string())
 
export type MovieGenres = z.infer<typeof movieGenresScheme>
