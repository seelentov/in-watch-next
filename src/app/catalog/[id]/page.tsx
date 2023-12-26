import Custom404 from "@/app/not-found";
import { FilmBannerItem } from "@/components/Film/FilmBanner/FilmBannerItem";
import { FilmMore } from '@/components/Film/FilmMore/FilmMore';
import apiGetMovies from "@/core/api/api";
import { Metadata } from "next";
import styles from './FilmPage.module.scss';


interface IFilmPageProps {
  params: { id: string }
}

export async function generateMetadata(
  { params }: IFilmPageProps
): Promise<Metadata> {
  const id = params.id
  const film = await apiGetMovies.getOne(id)
  return {
    title: film.name,
    description: film.description,
  }
}


export default async function FilmPage({ params }: IFilmPageProps) {

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
