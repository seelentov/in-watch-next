import FilmList from "@/components/Film/FilmList/FilmList";


export default function TrendingPage() {
  return (
    <div className="content">
      <h2>Тренды</h2>
      <FilmList films={[...films, ...series]} />
    </div>
  )
}
