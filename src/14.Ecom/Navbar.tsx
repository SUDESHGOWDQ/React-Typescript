import React from 'react';
import './Styles/Navbar.css';
import { Link } from 'react-router-dom';

interface NavbarProps {
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  size: number;
}

const Navbar: React.FC<NavbarProps> = ({ search, setSearch, size }) => {
  return (
    <div className='Navbar'>
      <nav className='nav'>
        <article className='navart'>
          <div className='navdiv'><h1>SHOP MORE</h1></div>
          <div className='navdiv'><Link style={{color:'white',textDecoration:'none'}} to={'/'}>Home</Link></div>
          <div className='navdiv'><input value={search} onChange={(e) => setSearch(e.target.value)} type="text" /></div>
          <div className='navdiv'><Link style={{color:'white',textDecoration:'none'}} to={'/cart'}>cart<sup>{size}</sup></Link></div>
        </article>
      </nav>
    </div>
  );
};

export default Navbar;
