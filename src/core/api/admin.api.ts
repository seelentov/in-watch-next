import { AdminSignIn } from "../types/admin";
import { API_URL } from "./api";

const BASE_URL = `${API_URL}api/admin/`

async function baseFetch(url: string, options: any) {
  const response = await fetch(url, {
    ...options,
    cache: 'no-store',
    headers: { 'Content-Type': 'application/json', ...options.headers }
  });

  const data = await response.json();

  return {
    data: data,
    status: response.status
  }
}

export async function login(form: AdminSignIn) {
  const response = await baseFetch(`${BASE_URL}login`, {
    method: 'POST',
    body: JSON.stringify(form)
  });
  return response;

}