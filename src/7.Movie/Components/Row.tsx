import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from '../axios';
import './Row.css'

type Movie = {
  id: number;
  poster_path: string;
  backdrop_path: string;
  original_title: string;
};

type RowProps = {
  title: string;
  isLargeRow?: boolean;
  fetchUrl: string;
};

const Row: React.FC<RowProps> = ({ title, isLargeRow, fetchUrl }) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(fetchUrl);
        setMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [fetchUrl]);

  return (
    <div className='Row'>
      <h1>{title}</h1>
      <div className="row__posters">
        {movies.map((movie) => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow ? "row__posterLarge" : ""}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.original_title}
            onClick={()=>{navigate('/movie',{state:{movie}})}}
          />
        ))}
      </div>
    </div>
  );
};

export default Row;