import React, { useState, ChangeEvent, FormEvent } from 'react';

interface InputData {
  name: string;
  email: string;
}

const App: React.FC = () => {
  const [input, setInput] = useState<InputData>({ name: "", email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = e.target;
    setInput((prevInput) => ({ ...prevInput, [name]: value }));
  };

  const handleClick = (e: FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    console.log(input);
  };

  return (
    <div>
      <form>
        <input type="text" name="name" value={input.name} onChange={handleChange} placeholder="Enter your name" />
        <br />
        <input type="email" name="email" value={input.email} onChange={handleChange} placeholder="Enter Your Email" />
        <br />
        <button onClick={handleClick}>Submit</button>
      </form>
    </div>
  );
};

export default App;
