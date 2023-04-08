import { useState } from "react";
import { UsersList, UserInfo } from "./components";
import "./App.css";

function App() {
  const [page, setPage] = useState<number>(1);
  const [userId, setUserId] = useState<number | null>(null);

  function handlerNextPage(): void {
    setPage(page + 1);
  }

  function handlerPreviousPage(): void {
    if (page <= 1) return;

    setPage(page - 1);
  }

  function handlerUserId(userId: number) {
    setUserId(userId);
  }
  return (
    <div className="App">
      <h1>React Query Example</h1>
      <div className="card">
        <UsersList page={page} handlerUserId={handlerUserId} />
        {/* <UserInfo userId={userId} /> */}
      </div>
      <button disabled={page === 1} onClick={handlerPreviousPage}>
        Anterior
      </button>
      <button disabled={page === 2} onClick={handlerNextPage}>
        Siguiente
      </button>
    </div>
  );
}

export default App;
