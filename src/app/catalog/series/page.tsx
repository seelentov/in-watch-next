import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";


export default function Login() {
  return (
    <div className="content">
      <h1>Сериалы</h1>
      <FilmList films={films} />
    </div>
  )
}
