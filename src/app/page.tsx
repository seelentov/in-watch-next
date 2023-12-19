import { FilmBanner } from "@/components/Film/FilmBanner/FilmBanner";
import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";

export default async function Home() {


  return (
    <div>
      <FilmBanner />
      <div className='content-main'>
        <h1>Тренды</h1>
        <FilmList films={films} view="slider" />
      </div>
    </div>
  )
}