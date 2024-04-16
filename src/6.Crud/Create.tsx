import React, { useState, FormEvent } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

const Create: React.FC = () => {
  const [value, setValue] = useState<User>({ name: "", email: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:8000/users', value);
      console.log(response);
      navigate('/');
    } catch (error) {
      console.error('Error creating user:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className='Create'>
      <form onSubmit={handleSubmit}>
        <h1>Create User</h1>
        <input
          type='text'
          value={value.name}
          name='name'
          onChange={handleChange}
          placeholder='Enter User Name'
        />
        <br />
        <input
          type='text'
          value={value.email}
          name='email'
          onChange={handleChange}
          placeholder='Enter User Email'
        />
        <br />
        <button type='submit'>Create</button>
        <Link to='/'>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default Create;
