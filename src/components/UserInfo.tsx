import { useQuery } from "react-query";
import { fetchUserData } from "../fetchers";

export default function UserInfo({ userId }: { userId: number | null }) {
  const query = useQuery(
    ["info", userId !== null ? userId.toString() : "1"],
    fetchUserData,
    {
      keepPreviousData: true,
      enabled: userId !== null,
    }
  );

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return (
      <div>{query.error instanceof Error ? query.error.message : "Error."}</div>
    );
  }

  if (query.isSuccess) {
    return (
      <div>
        <h2>Correo: {query.data.data.email}</h2>
        <img
          src={`${query.data.data.avatar}`}
          alt={`Avatar de ${query.data.data.first_name}`}
        />
      </div>
    );
  }

  return <div>Clickea el nombre de un usuario</div>;
}
