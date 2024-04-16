import React, { useEffect, useState } from 'react';

interface UserData {
  id: number;
  name: string;
  // Add other properties as needed
}

const App: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then((d: UserData[]) => setData(d))
      .catch(error => console.error("Error fetching data:", error));
  }, []);

  return (
    <div>
      {data.map((user: UserData) => (
        <section key={user.id}>
          <p>{user.name}</p>
        </section>
      ))}
    </div>
  );
};

export default App;
