import apiGetMovies from "@/core/api/api";


export default async function TrendingPage() {
  const data = await apiGetMovies.getAllTags()

  console.log(data)

  return (
    <div className="content">
      {/*<FilmList films={filmsList} />*/}
    </div>
  )
}
