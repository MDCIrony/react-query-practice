import { useQuery } from "react-query";
import { fetchUserData } from "../fetchers";

export default function UserInfo({ userId }: { userId: number | null }) {
  const query = useQuery(["info", "1"], fetchUserData, {
    enabled: userId !== null,
  });

  console.log(query.fetchStatus);

  if (query.isLoading) {
    return <div>Loading...</div>;
  }

  if (query.isError) {
    return (
      <div>{query.error instanceof Error ? query.error.message : "Error."}</div>
    );
  }

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
