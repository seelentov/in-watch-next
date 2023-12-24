import FilmList from "@/components/Film/FilmList/FilmList";
import apiGetMovies from "@/core/api/api";


export default async function TagPage({ params }: { params: { tag: string } }) {
  const { data: filmsList } = await apiGetMovies.getAllByFilter({
    order: 'rating',
    orderDir: 'desc',
    genres: params.tag
  })

  return (
    <div className="content">
      <h2>{params.tag}</h2>
      <FilmList films={filmsList} />
    </div>
  )
}
