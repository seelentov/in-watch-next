import { FilmBanner } from "@/components/Film/FilmBanner/FilmBanner"
import FilmList from "@/components/Film/FilmList/FilmList"
import apiGetMovies from "@/core/api/api"
import { Filter } from "@/core/types/filter"

export default async function HomePage() {

  const { data: bannerList } = await apiGetMovies.getAllByFilter({
    order: 'rating',
    showInBanner: 'true',
    page_limit: 3,
    orderDir: 'desc'
  })

  const filmsQuery: Filter = {
    order: 'rating',
    page_limit: 10,
    orderDir: 'desc'
  }

  return (
    <>
      <FilmBanner films={bannerList} />
      <div className='content-main'>
        <h1>Тренды</h1>
        <FilmList query={filmsQuery} view="slider" />
      </div>
    </>
  )
}