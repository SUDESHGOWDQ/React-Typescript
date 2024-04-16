import React, { useState } from 'react';
import { CSVLink } from 'react-csv';
import './App.css';

const App: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [place, setPlace] = useState<string>('');
  const [phno, setPhno] = useState<string>('');
  const [college, setCollege] = useState<string>('');
  const [yop, setYop] = useState<string>('');
  const [data, setData] = useState<Array<{ Name: string; Email: string; Place: string; PHONE: string; College: string; Yop: string }>>([]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    const newData = { Name: name, Email: email, Place: place, PHONE: phno, College: college, Yop: yop };
    setData([...data, newData]);
    setEmail('');
    setName('');
    setPlace('');
    setPhno('');
    setCollege('');
    setYop('');
  };

  console.log(data);
  return (
    <div className='App'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Name</label>
        <input type='text' value={name} onChange={(e) => setName(e.target.value)} placeholder='Enter Your Name' /><br />
        <br />
        <label htmlFor='email'>Email</label>
        <input type='email' value={email} onChange={(e) => setEmail(e.target.value)} placeholder='Enter Your Email' /><br />
        <br />
        <label htmlFor='place'>Place</label>
        <input type='text' value={place} onChange={(e) => setPlace(e.target.value)} placeholder='Enter Your Place' /><br />
        <br />
        <label htmlFor='phno'>PH-NO</label>
        <input type='tel' value={phno} onChange={(e) => setPhno(e.target.value)} placeholder='Enter Your PH-No' /><br />
        <br />
        <label htmlFor='college'>College</label>
        <input type='text' value={college} onChange={(e) => setCollege(e.target.value)} placeholder='Enter Your College' /><br />
        <br />
        <label htmlFor='yop'>Year Of Passed Out</label>
        <input type='date' value={yop} onChange={(e) => setYop(e.target.value)} placeholder='Enter Your Yop' /><br />
        <br />
        <button type='submit'>Submit</button>
        <button><CSVLink data={data} style={{ textDecoration: 'none', color: 'white' }}>Export</CSVLink></button>
      </form>
    </div>
  );
};

export default App;
