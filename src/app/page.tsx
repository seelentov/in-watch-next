import { FilmBanner } from "@/components/Film/FilmBanner/FilmBanner"
import FilmList from "@/components/Film/FilmList/FilmList"
import apiGetMovies from "@/core/api/api"

export default async function HomePage() {

  const { data: filmsList } = await apiGetMovies.getAllByFilter({
    order: 'rating',
    limit: '12',
    orderDir: 'desc'
  })
  const { data: bannerList } = await apiGetMovies.getAllByFilter({
    order: 'rating',
    showInBanner: 'true',
    limit: '3',
    orderDir: 'desc'
  })

  return (
    <>
      <FilmBanner films={bannerList} />
      <div className='content-main'>
        <h1>Тренды</h1>
        <FilmList films={filmsList} view="slider" />
      </div>
    </>
  )
}