import FilmListReceit from "@/components/Film/FilmListReceit/FilmListReceit";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Ваша история просмотров',
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
      <h1>История просмотров</h1>
      <FilmListReceit />
    </div>
  )
}
