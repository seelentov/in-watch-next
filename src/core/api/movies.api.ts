'use server'

import { API_URL } from "../config/config";
import { Filter, FilterValues } from "../types/filter";
import { Movie } from "../types/movie";

export interface Response<T> {
  data: T
  page: number
  pages: number
  count: number
  entries: number
}

const BASE_URL = `${API_URL}api/movies`

async function baseFetch<T>(url: string, options: any): Promise<Response<T>> {
  const response = await fetch(url, {
    ...options,
    headers: { 'Content-type': 'application/json', ...options.headers }
  })
  if (response.ok) {
    return response.json();
  }
  throw new Error("Request failed");
}

export async function getOne(id: string): Promise<Movie> {
  try {
    const data = await baseFetch<Movie>(`${BASE_URL}/${id}`, {});
    return data as any;
  } catch (error) {
    alert(`Ошибка при получении данных: ${error}`)
    throw new Error("Failed to get movie");
  }
}

export async function getOneAndWatch(id: string, token: string): Promise<Movie> {
  try {
    const data = await baseFetch<Movie>(`${BASE_URL}/${id}?view=true`, {
      headers: { Authorization: token },
    });
    return data as any;
  } catch (error) {
    alert(`Ошибка при получении данных: ${error}`)
    throw new Error("Failed to get movie");
  }
}

export async function getAll(): Promise<Response<Movie[]>> {
  try {
    const data = await baseFetch<Movie[]>(BASE_URL, {});
    return data;
  } catch (error) {
    alert(`Ошибка при получении данных: ${error}`)
    throw new Error("Failed to get movies");
  }
}

export async function getMayValues(): Promise<FilterValues> {
  try {
    const { data } = await getAll();
    const genres = Array.from(new Set(data.reduce((result: string[], film: Movie) => {
      film.genres.forEach((genre) => {
        result.push(genre);
      });
      return result;
    }, []).sort()))

    const ageRating = Array.from(new Set(data.reduce((result: number[], film: Movie) => {
      result.push(film.ageRating)
      return result
    }, []).sort((a, b) => a - b)))

    const country = Array.from(new Set(data.reduce((result: string[], film: Movie) => {
      result.push(film.country)
      return result
    }, []).sort()))

    const yearMin = Math.min(...data.map(film => film.year));
    const yearMax = Math.max(...data.map(film => film.year));

    const movieLengthMin = Math.min(...data.map(film => film.movieLength));
    const movieLengthMax = Math.max(...data.map(film => film.movieLength));

    const ratingMin = Math.floor(Math.min(...data.map(film => film.rating)));
    const ratingMax = Math.ceil(Math.max(...data.map(film => film.rating)));

    const name = data.reduce((result: string[], film: Movie) => {
      result.push(film.name)
      return result
    }, []).sort();

    return {
      order: ['Год', 'Длительность', 'Рейтинг', 'Название'],
      orderDir: ['ASC', 'DESC'],
      genres,
      yearMin,
      yearMax,
      ageRating,
      country,
      movieLengthMin,
      movieLengthMax,
      ratingMin,
      ratingMax,
      name
    }


  } catch (error) {
    alert(`Ошибка при получении данных: ${error}`)
    throw new Error("Failed to get movie genres");
  }
}

export async function getAllByFilter(filter?: Filter): Promise<Response<Movie[]>> {
  try {
    const filterString = filter ? Object.entries(filter).map(([key, value]) => `${key}=${value}`).join("&") : "";
    const data = await baseFetch<Movie[]>(`${BASE_URL}?${filterString}`, {});
    return data;
  } catch (error) {
    alert(`Ошибка при получении данных: ${error}`)
    throw new Error("Failed to get may values");
  }
}