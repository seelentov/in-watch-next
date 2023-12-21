import { FilmBanner } from "@/components/Film/FilmBanner/FilmBanner";
import FilmList from "@/components/Film/FilmList/FilmList";
import { films } from "@/test/data/films";
import { series } from "@/test/data/series";

export default async function HomePage() {


  return (
    <div>
      <FilmBanner />
      <div className='content-main'>
        <h1>Тренды</h1>
        <FilmList films={[...films, ...series]} view="slider" />
      </div>

    </div>

  )
}