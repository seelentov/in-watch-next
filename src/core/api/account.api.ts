'use server'

import { API_URL } from "../config/config";
import User, { UserLogin } from "../types/user";



const BASE_URL = `${API_URL}api/auth/`



async function baseFetch(url: string, options: any) {
    const response = await fetch(url, {
      ...options,
      headers: { 'Content-Type': 'application/json', ...options.headers }
    });

    const data = await response.json();

    return {
      data: data,
      status: response.status
    }
}

export async function login(form: UserLogin) {

    const response = await baseFetch(`${BASE_URL}login`, {
      method: 'POST',
      body: JSON.stringify(form)
    });
    return response;

}

export async function signUp(form: UserLogin) {

  const response = await baseFetch(`${BASE_URL}signup`, {
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

export async function getFavorite(token: string) {
  const response = await baseFetch(`${BASE_URL}favorite`, {
    headers: { Authorization: token },
  });
  return response;
}

export async function addFavorite(ids: string[], token: string) {
  const response = await baseFetch(`${BASE_URL}favorite?action=add`, {
    headers: { Authorization: token },
    method: 'PATCH',
    body: JSON.stringify({ids: ids})
  });
  return response;
}

export async function removeFavorite(ids: string[], token: string) {
  const response = await baseFetch(`${BASE_URL}favorite?action=del`, {
    headers: { Authorization: token },
    method: 'PATCH',
    body: JSON.stringify({ids: ids})
  });
  return response;
}