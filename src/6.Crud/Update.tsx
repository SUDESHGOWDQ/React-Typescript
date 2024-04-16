import React, { FormEvent, useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

interface User {
  name: string;
  email: string;
}

const UpdateUser: React.FC = () => {
  const [value, setValue] = useState<User>({ name: '', email: '' });
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await axios.get<User>(`http://localhost:8000/users/${id}`);
        setValue(response.data);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };
    fetchUser();
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.put<User>(`http://localhost:8000/users/${id}`, value);
      setValue(response.data);
      navigate('/');
    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  return (
    <div className='UpdateUser'>
      <form onSubmit={handleSubmit}>
        <h1>Update User</h1>
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
        <button type='submit'>Update</button>
        <Link to='/'>
          <button>Back</button>
        </Link>
      </form>
    </div>
  );
};

export default UpdateUser;
