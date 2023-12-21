import Custom404 from "@/app/not-found"
import { Player } from "@/components/Player/Player"
import { episodes } from "@/test/data/episodes"
import { films } from "@/test/data/films"

export default function PlayerPage({ params }: { params: { slug: string[] } }) {

  const type = params.slug[0]
  const id = params.slug[1]

  const video = [...films, ...episodes].find(video => video._id === id)

  console.log('video', video)

  return (
    <div className="content">
      {video ? <Player content={video} /> : <Custom404/>}
    </div>
  )
}
