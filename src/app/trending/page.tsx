import FilmList from "@/components/Film/FilmList/FilmList";
import { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: 'Тренды',
    description: 'Самое популярное в этом месяце',
  }
}


export default async function TrendingPage() {
  const query = {
    order: 'rating',
    page_limit: 9,
    orderDir: 'desc'
  }

  return (
    <div className="content">
      <h2>Тренды</h2>
      <FilmList query={query} />
    </div>
  )
}
