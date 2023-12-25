import FilmList from "@/components/Film/FilmList/FilmList";
import { FilterForm } from "@/components/Filter/Filter";
import apiGetMovies from "@/core/api/api";
import { Filter } from "@/core/types/filter";


export default async function SearchPage({
  searchParams,
}: {
  searchParams?: Filter;
}) {

  const mayValues = await apiGetMovies.getMayValues()
  return (
    <div className='content'>
      <h2>{searchParams?.name ? `Поиск по запросу ${searchParams.name}` : 'Поиск'}</h2>
      <FilterForm filter={searchParams} mayValues={mayValues} />
      <FilmList query={searchParams} />
    </div>
  )
}
