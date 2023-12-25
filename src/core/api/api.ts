import { API_URL } from "../config/config";
import { Filter } from "../types/filter";
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

  async getAllTags(): Promise<string[]> {
    try {
      const { data } = await this.getAll();
      const genres = data.reduce((result: string[], film: Movie) => {
        film.genres.forEach((genre) => {
          if (!result.includes(genre)) {
            result.push(genre);
          }
        });
        return result;
      }, []);
      return genres.sort();
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
      throw new Error("Failed to get movies by filter");
    }
  }
}

const apiGetMovies = new API_GET_MOVIES();
export default apiGetMovies;