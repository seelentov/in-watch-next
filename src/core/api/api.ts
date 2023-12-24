import axios, { AxiosRequestConfig, AxiosResponse } from "axios"
import { API_URL } from "../config/axios.config"
import { Movie } from "../types/movie"


class API_GET_MOVIES {
  private baseUrl: string
  constructor() {
    this.baseUrl = `${API_URL}api/movies`
  }

  private async baseFetch(url: string, options: AxiosRequestConfig<any> | undefined) {
    return await axios.get(url, { ...options })
  }

  async getOne(id: string): Promise<AxiosResponse<Movie, any>> {
    return await this.baseFetch(`${this.baseUrl}/${id}`, {})
  }

  async getAll(): Promise<AxiosResponse<Movie[], any>> {
    return await this.baseFetch(this.baseUrl, {})
  }

  async getAllTags(): Promise<string[]> {
    const { data } = await this.getAll()
    const genres = data.reduce((result: string[], film: Movie) => {
      film.genres.forEach(genre => {
        if (!result.includes(genre)) {
          result.push(genre);
        }
      });
      return result;
    }, []);

    return genres;
  }

  async getAllByFilter(filter: { [key: string]: string }): Promise<AxiosResponse<Movie[], any>> {
    const filterString = Object.entries(filter).map(([key, value]) => `${key}=${value}`).join('&')

    return await this.baseFetch(`${this.baseUrl}?${filterString}`, {})
  }
}


const apiGetMovies = new API_GET_MOVIES()
export default apiGetMovies