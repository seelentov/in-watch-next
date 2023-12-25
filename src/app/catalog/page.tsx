import { TagList } from "@/components/Tag/TagList/TagList";
import apiGetMovies from "@/core/api/api";


export default async function TrendingPage() {
  const tags = await apiGetMovies.getAllTags()


  return (
    <div className="content">
      <TagList tags={tags} />
    </div>
  )
}
