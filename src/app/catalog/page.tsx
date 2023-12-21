import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";
import { series } from "@/test/data/series";


export default function CatalogPage() {
  return (
    <div className="content">
      <h2>Фильмы</h2>
      <FilmList films={films} view="slider"/>
      <h2>Сериалы</h2>
      <FilmList films={series} view="slider"/>
    </div>
  )
}
