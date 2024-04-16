import React, { useReducer } from 'react';

type Action = "Incre";

const reducer = (state: number, action: Action): number => {
  switch (action) {
    case "Incre":
      return state + 1;
    default:
      return state;
  }
};

const App: React.FC = () => {
  const initialState: number = 0;
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={() => dispatch("Incre")}>+</button>
    </div>
  );
};

export default App;
