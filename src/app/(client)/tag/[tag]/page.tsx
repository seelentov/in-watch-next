import FilmList from "@/components/Film/FilmList/FilmList";
import { Metadata } from "next";

interface ITagPageProps {
  params: { tag: string }
}

export async function generateMetadata(
  { params }: ITagPageProps
): Promise<Metadata> {
  const title = params.tag
  const description = `Лучшие фильмы жанра ${params.tag}`

  return {
    title,
    description
  }
}


export default async function TagPage({ params }: ITagPageProps) {

  const query = {
    genres: params.tag
  }


  return (
    <div className="content">
      <h2>{params.tag}</h2>
      <FilmList query={query} />
    </div>
  )
}
