'use server'

import { API_URL } from "../config/config";
import { UserLogin } from "../types/user";

const BASE_URL = `${API_URL}api/auth/`

  async function baseFetch(url: string, options: any) {
    try {
      const response = await fetch(url, {
        ...options,
        headers: { 'Content-type': 'application/json', ...options.headers }
      });
      return response.json()
    } catch (error) {
      return error
    }
  }

 export async function login(form: UserLogin) {
    const response = await baseFetch(`${BASE_URL}login`, {
      method: 'POST',
      body: JSON.stringify(form)
    });
    return response;
  }

 export async function getMe(token: string) {
    const response = await baseFetch(`${BASE_URL}me`, {
      headers: { Authorization: token },
    });
    return response;
  }