export default async function fetcher(arg: string) {
  const response = await fetch(arg)
  const data = await response.json()
  return data?.data
}
