import React from 'react';
import './Styles/Home.css';

interface Item {
  id: number;
  title: string;
  category: string;
  image: string;
}

interface HomeProps {
  data: Item[];
  search: string;
  addCart: (item: Item) => void;
}

const Home: React.FC<HomeProps> = ({ data, search, addCart }) => {
  return (
    <div className='Home'>
      {data.filter((item) => item.category.toLowerCase().includes(search)).map((item) => (
        <div key={item.id} className='Card'>
          <img src={item.image} height={'200px'} width={'200px'} alt={item.title} />
          <p>{item.title}</p>
          <p><b>{item.category}</b></p>
          <button onClick={() => addCart(item)}>Add Cart</button>
        </div>
      ))}
    </div>
  );
};

export default Home;
