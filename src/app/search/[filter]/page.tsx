import FilmList from "@/components/Film/FilmList/FilmList"
import Film from "@/core/models/Film"
import Series from "@/core/models/Series"
import { films } from "@/test/data/films"
import { series } from "@/test/data/series"


export default function SearchPage({ params }: { params: { filter: string } }) {

  const filterInput = decodeURIComponent(params.filter.replace('_', ' '))

  const entries: (Film | Series)[] = [...films, ...series].filter(film => {
    return film.name.includes(filterInput) || film.tags.join('').includes(filterInput) || film.year.toString().includes(filterInput)
  })

  const filmsFiltered = entries.filter(film => film.type === 'films')
  const seriesFiltered = entries.filter(film => film.type === 'series')

  const Films = () => <>{
    filmsFiltered.length > 0 && <>
      <h2>Фильмы</h2>
      <FilmList films={filmsFiltered} view="slider"/>
    </>
  }</>

  const Series = () => <>{
    seriesFiltered.length > 0 && <>
      <h2>Сериалы</h2>
      <FilmList films={seriesFiltered} view="slider"/>
    </>
  }</>

  const NotFound = () => (seriesFiltered.length === 0 && filmsFiltered.length === 0) && <p>Ничего не найдено</p>

  return (
    <div className='content'>
      <Films />
      <Series />
      <NotFound />
    </div>
  )
}
