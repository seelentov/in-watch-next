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

class API_GET_MOVIES {
  private baseUrl: string;
  constructor() {
    this.baseUrl = `${API_URL}api/movies`;
  }

  private async baseFetch<T>(url: string, options: any): Promise<Response<T>> {
    try {
      const response = await fetch(url, { ...options, next: { cache: 'force-cache' } as any })
      if (response.ok) {
        return response.json();
      }
      throw new Error("Request failed");
    } catch (error) {
      throw new Error("Request failed");
    }
  }

  async getOne(id: string): Promise<Movie> {
    try {
      const data = await this.baseFetch<Movie>(`${this.baseUrl}/${id}`, {});
      return data as any;
    } catch (error) {
      throw new Error("Failed to get movie");
    }
  }

  async getAll(): Promise<Response<Movie[]>> {
    try {
      const data = await this.baseFetch<Movie[]>(this.baseUrl, {});
      return data;
    } catch (error) {
      throw new Error("Failed to get movies");
    }
  }

  async getMayValues(): Promise<FilterValues> {
    try {
      const { data } = await this.getAll();
      const genres = Array.from(new Set(data.reduce((result: string[], film: Movie) => {
        film.genres.forEach((genre) => {
          result.push(genre);
        });
        return result;
      }, []).sort()))

      const ageRating = Array.from(new Set(data.reduce((result: number[], film: Movie) => {
        result.push(film.ageRating)
        return result
      }, []).sort((a,b)=>a-b)))

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
      throw new Error("Failed to get movie genres");
    }
  }

  async getAllByFilter(filter?: Filter): Promise<Response<Movie[]>> {
    try {
      const filterString = filter ? Object.entries(filter).map(([key, value]) => `${key}=${value}`).join("&") : "";
      const data = await this.baseFetch<Movie[]>(`${this.baseUrl}?${filterString}`, {});
      return data;
    } catch (error) {
      throw new Error("Failed to get may values");
    }
  }
}

const apiGetMovies = new API_GET_MOVIES();
export default apiGetMovies;