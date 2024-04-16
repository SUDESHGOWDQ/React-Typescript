import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios, { AxiosResponse } from 'axios';
import { Employee } from './Employee';
import './Home.css';

const Home: React.FC = () => {
  const [data, setData] = useState<Employee[]>([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<Employee[]> = await axios.get<Employee[]>('http://localhost:8000/users');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  }, []);

  const handleDelete = (id: number) => {
    axios.delete(`http://localhost:8000/users/${id}`)
      .then(() => {
        setData(prevData => prevData.filter(item => item.id !== id));
        console.log('User deleted successfully');
      })
      .catch(err => console.error('Error deleting data:', err));
  };

  return (
    <div className='Home'>
      <div className='Header'>
        <h1>Crud APP</h1>
        <Link to={'/create'}><button>Add+</button></Link>
      </div>
      <h1>Home</h1>
      <center>
        <table border={1}>
          <thead>
            <tr>
              <td><b>Id</b></td>
              <td><b>Name</b></td>
              <td><b>Email</b></td>
              <td><b>Action</b></td>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>
                  <Link to={`/update/${item.id}`}><button>Edit</button></Link>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </center>
    </div>
  );
};

export default Home;
