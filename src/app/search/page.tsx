import FilmList from "@/components/Film/FilmList/FilmList";
import { FilterForm } from "@/components/Filter/Filter";
import apiGetMovies from "@/core/api/api";
import { Filter } from "@/core/types/filter";
import { Metadata } from "next";

interface ISearchPageProps {
  searchParams?: Filter;
}

export async function generateMetadata(
  { searchParams }: ISearchPageProps
): Promise<Metadata> {
  const title = searchParams?.name ? `Поиск по названию: ${searchParams?.name}` : 'Поиск'
  const description = 'Удобный фильтр для поиска фильма по множеству жанров'

  return {
    title,
    description
  }
}


export default async function SearchPage({
  searchParams,
}: ISearchPageProps) {


  const mayValues = await apiGetMovies.getMayValues()
  return (
    <div className='content'>
      <h2>{searchParams?.name ? `Поиск по запросу ${searchParams.name}` : 'Поиск'}</h2>
      <FilterForm filter={searchParams} mayValues={mayValues} />
      <FilmList query={searchParams} />
    </div>
  )
}
