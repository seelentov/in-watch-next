import Custom404 from "@/app/not-found";
import { FilmBannerItem } from "@/components/Film/FilmBanner/FilmBannerItem";
import { FilmMore } from "@/components/Film/FilmMore/FilmMore";
import { films } from "@/test/data/films";
import { series } from "@/test/data/series";
import styles from './FilmPage.module.scss';



export default function FilmPage({ params }: { params: { id: string } }) {

  const film = [...films, ...series].find(film => film._id === params.id)
  if (!film) {
    return <div className={styles.notFound}><Custom404 /></div>
  }

  return (
    <div className={styles.main}>
      <FilmBannerItem film={film} header='h1' />
      <div className="content-main">
        <FilmMore film={film} />
      </div>
    </div>

  )
}
