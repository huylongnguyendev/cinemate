export const baseURL = process.env.NEXT_PUBLIC_API_URL || ""
export const imgURL = process.env.NEXT_PUBLIC_IMG_URL || ""
export const token = process.env.TMDB_TOKEN || ""

export function getOptions(method: string) {
  const options = {
    method: method.toUpperCase(),
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    next: { revalidate: 3600 }
  }

  return options
}