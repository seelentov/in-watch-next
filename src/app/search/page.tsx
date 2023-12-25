import FilmList from "@/components/Film/FilmList/FilmList";
import { FilterForm } from "@/components/Filter/Filter";
import apiGetMovies from "@/core/api/api";
import { Filter } from "@/core/types/filter";


export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Filter;
}) {

  const data = await apiGetMovies.getAllByFilter(searchParams)

  return (
    <div className='content'>
      <FilterForm filter={searchParams} />
      <FilmList films={data} />
    </div>
  )
}
