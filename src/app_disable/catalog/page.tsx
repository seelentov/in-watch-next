import FilmList from "@/components/Film/FilmList/FilmList";


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
