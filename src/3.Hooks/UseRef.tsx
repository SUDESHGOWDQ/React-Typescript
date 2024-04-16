import React, { useEffect, useRef, useState } from 'react';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const count = useRef<number>(0);

  useEffect(() => {
    return () => {
      count.current = count.current + 1;
    };
  }, [name]);

  return (
    <div>
      <input type="text" onChange={(e) => setName(e.target.value)} />
      <h1>My Name is {name}</h1>
      <h1>{count.current}</h1>
    </div>
  );
};

export default App;
