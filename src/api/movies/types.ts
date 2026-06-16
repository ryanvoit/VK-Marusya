import z from "zod"

const movieScheme = z.object({
    id: z.number(), //integer
    title: z.string(),
    originalTitle: z.string(),
    language: z.string(),
    releaseYear: z.number(), //integer
    releaseDate: z.string(),
    genres: z.array(z.string()),
    plot: z.string(),
    runtime: z.number(), //integer

    budget: z.string().nullable(),
    revenue: z.string().nullable(),

    homepage: z.string(),
    status: z.string(),
    posterUrl: z.string(),

    backdropUrl: z.string().nullable(),

    trailerUrl: z.string(),
    trailerYouTubeId: z.string(),
    tmdbRating: z.number(), //integer
    searchL: z.string(),

    keywords: z.array(z.string()),
    countriesOfOrigin: z.array(z.string()),
    languages: z.array(z.string()),
    cast: z.array(z.string()),

    director: z.string(),

    production: z.string().nullable(),
    awardsSummary: z.string().nullable(),
});

export type Movie = z.infer<typeof movieScheme>

export const movieListScheme = z.array(movieScheme)

export type MovieList = z.infer<typeof movieListScheme>
 
