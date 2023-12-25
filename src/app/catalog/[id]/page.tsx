import Custom404 from "@/app/not-found";
import { FilmBannerItem } from "@/components/Film/FilmBanner/FilmBannerItem";
import { FilmMore } from '@/components/Film/FilmMore/FilmMore.1';
import apiGetMovies from "@/core/api/api";
import styles from './FilmPage.module.scss';



export default async function FilmPage({ params }: { params: { id: string } }) {

  const film = await apiGetMovies.getOne(params.id)


  if (!film) {
    return <div className={styles.notFound}><Custom404 /></div>
  }

  return (
    <div className={styles.main}>
      <FilmBannerItem film={film} header='h1' isMorePage />
      <div className="content-main">
        <FilmMore film={film} />
      </div>
    </div>

  )
}
