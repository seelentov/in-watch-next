import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";


export default function Login() {
  return (
    <div className="content">
      <h2>Тренды</h2>
      <FilmList films={films} />
    </div>
  )
}
