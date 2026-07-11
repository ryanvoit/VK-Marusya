import { GenrePageComponent } from "@/components/Main/GenrePage/GenrePageComponent";

interface PageProps {
    params: Promise<{ genre: string }>
}

export default async function Page({ params }: PageProps) {
    const { genre } = await params

    return (
        <div className="container">
        <GenrePageComponent genre={genre} />
        </div>
    )
}
  