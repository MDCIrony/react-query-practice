import { IUserObject } from "../types";

export default async function ({ queryKey }: { queryKey: string[] }) {
  const [, userId] = queryKey;

  const response = await fetch(`https://reqres.in/api/users/${userId}`);

  const userData: Promise<IUserObject> = response.json();
  return Promise.resolve(userData);
}
