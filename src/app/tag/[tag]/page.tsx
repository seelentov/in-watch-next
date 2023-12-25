import FilmList from "@/components/Film/FilmList/FilmList";


export default async function TagPage({ params }: { params: { tag: string } }) {

  const query = {
    genres: params.tag
  }


  return (
    <div className="content">
      <h2>{params.tag}</h2>
      <FilmList query={query} />
    </div>
  )
}
