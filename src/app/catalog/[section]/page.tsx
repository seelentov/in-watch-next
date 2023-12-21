import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";
import { series } from "@/test/data/series";


export default function SectionPage({ params }: { params: { section: string } }) {

  const thisFilms = params.section === 'series' ? series : films
  const header = params.section === 'series' ? "Сериалы" : 'Фильмы'

  return (
    <div className="content">
      <h1>{header}</h1>
      <FilmList films={thisFilms} view='slider' />
    </div>
  )
}
