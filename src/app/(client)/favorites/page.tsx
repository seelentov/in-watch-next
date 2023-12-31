import FilmListFavorite from "@/components/Film/FilmListFavorites/FilmListFavorites";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Избранное',
    description: 'То, что выбираете вы!',
    robots: {
      index: false,
      follow: true,
      nocache: true,
      googleBot: {
        index: false,
        follow: false,
        noimageindex: true,
      },
    },
  }
}


export default function FavoritePage() {
  return (
    <div className="content">
      <h1>Избранное</h1>
      <FilmListFavorite />
    </div>
  )
}
