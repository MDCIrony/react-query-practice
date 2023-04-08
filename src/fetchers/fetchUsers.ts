import { IPageData } from "../types";

export default async function ({ queryKey }: { queryKey: string[] }) {
  const [, page] = queryKey;

  const response = await fetch(`https://reqres.in/api/users?page=${page}`);
  const pageData: Promise<IPageData> = response.json();

  return Promise.resolve(pageData);
}
