import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";
import { series } from "@/test/data/series";


export default function TrendingPage() {
  return (
    <div className="content">
      <h2>Тренды</h2>
      <FilmList films={[...films, ...series]} />
    </div>
  )
}
