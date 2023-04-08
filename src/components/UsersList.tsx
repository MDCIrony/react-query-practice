import { useQuery } from "react-query";
import { fetchUsers } from "../fetchers";

export default function UsersList({
  page,
  handlerUserId,
}: {
  page: number;
  handlerUserId: Function;
}): React.ReactElement {
  const query = useQuery(["users", page.toString()], fetchUsers, {});

  if (query.isError) {
    return (
      <div>{query.error instanceof Error ? query.error.message : "Error"}</div>
    );
  }

  if (query.isSuccess) {
    return (
      <div>
        {query.data.data.map((user) => {
          return (
            <div
              key={user.id}
              onClick={() => handlerUserId(user.id)}
            >{`${user.first_name} ${user.last_name}`}</div>
          );
        })}
      </div>
    );
  }

  return <div>Loading ... </div>;
}
