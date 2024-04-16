import React, { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  username: string;
  email: string;
}

const App: React.FC = () => {
  const [data, setData] = useState<User[]>([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((d: User[]) => setData(d));
  }, []);

  return (
    <div>
      <input
        type="text"
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by name"
      />
      {data
        .filter((x) => x.name.toLowerCase().includes(search.toLowerCase()))
        .map((x) => (
          <div key={x.id}>
            <p>{x.name}</p>
          </div>
        ))}
    </div>
  );
};

export default App;
