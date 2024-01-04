import { API_URL } from "./api";

const BASE_URL = `${API_URL}api/auth/`

async function baseFetch(url: string, options: any) {
  const response = await fetch(url, {
    ...options,
    cache: 'no-store',
    headers: { ...options.headers }
  });

  const data = await response.json();

  return {
    data: data,
    status: response.status
  }
}

export async function changeAvatarUrl(image: File, token: string) {
  const formData = new FormData()
  formData.append('image', image)
  const response = await baseFetch(`${BASE_URL}changeimage`, {
    headers: {
      Authorization: token,
    },
    method: 'PATCH',
    body: formData
  });
  return response;
}