import { FilmBanner } from "@/components/Film/FilmBanner/FilmBanner"
import FilmList from "@/components/Film/FilmList/FilmList"
import FilmListReceit from "@/components/Film/FilmListReceit/FilmListReceit"
import { getAllByFilter } from "@/core/api/movies.api"
import { Filter } from "@/core/types/filter"

export default async function HomePage() {

  const { data: bannerList } = await getAllByFilter({
    order: 'rating',
    showInBanner: 'true',
    page_limit: 3,
    orderDir: 'desc'
  })

  const trandQuery: Filter = {
    order: 'viewsMonth',
    page_limit: 10,
    orderDir: 'desc'
  }

  const bestQuery: Filter = {
    order: 'likes',
    page_limit: 10,
    orderDir: 'desc'
  }

  const popularQuery: Filter = {
    order: 'views',
    page_limit: 10,
    orderDir: 'desc'
  }

  return (
    <>
      <FilmBanner films={bannerList} />
      <div className='content-main'>
        <h2>В этом месяце</h2>
        <FilmList query={trandQuery} view="slider" />
        <FilmListReceit view="slider"/>
        <h2>Лучшее</h2>
        <FilmList query={bestQuery} view="slider" />
        <h2>Популярное</h2>
        <FilmList query={popularQuery} view="slider" />
      </div>
    </>
  )
}