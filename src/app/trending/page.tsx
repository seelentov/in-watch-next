import FilmList from "@/components/Film/FilmList/FilmList";
import apiGetMovies from "@/core/api/api";


export default async function TrendingPage() {
  const { data: filmsList } = await apiGetMovies.getAllByFilter({
    order: 'rating',
    limit: '9',
    orderDir: 'desc'
  })

  return (
    <div className="content">
      <h2>Тренды</h2>
      <FilmList films={filmsList} />
    </div>
  )
}
