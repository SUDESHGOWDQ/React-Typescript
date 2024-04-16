import React, { useState, useMemo } from 'react';

const App: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const power = (): number => {
    return count ** 2;
  };

  const pow: number = useMemo(() => power(), [count]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <h2>Power: {pow}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
};

export default App;
