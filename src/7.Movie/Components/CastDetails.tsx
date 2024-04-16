import axios from '../axios';
import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import './Cast.css';

type CastDetail = {
  id: number;
  name: string;
  known_for_department: string;
  profile_path: string;
  known_for: { id: number; poster_path: string; original_title?: string; name?: string; title?: string; vote_average: number }[];
};

const Cast: React.FC = () => {
  const { castId, castName } = useParams<{ castId: string; castName: string }>();
  const [castDtl, setCastDtl] = useState<CastDetail[]>([]);
  const navigate = useNavigate();
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchCastDetails = async () => {
      try {
        const response = await axios.get<CastDetail[]>(`https://api.themoviedb.org/3/search/person?api_key=ab1da08307f82007e9975d4dccf67670&query=${castName}`);
        setCastDtl(response.data.results);
      } catch (error) {
        console.error('Error fetching cast details:', error);
      }
    };
    fetchCastDetails();
  }, [castId, castName]);

  return (
    <div className='cast'>
      {castDtl.slice(0, 1).map((x) => (
        <div className='cast_Container' key={x.id}>
          <div className='cast_img'>
            <img src={`${baseUrl}${x.profile_path}`} alt="" />
          </div>
          <div className='cast_Contents'>
            <h1><span style={{ color: 'grey' }}>Name</span>: {x.name}</h1>
            <p><span style={{ color: 'grey' }}>Occupation</span>: {x.known_for_department}</p>
          </div>
        </div>
      ))}
      <div className='Cast_movie'>
        {castDtl.map((person) => (
          <div key={person.id}>
            {person.known_for.map((movie) => (
              <div key={movie.id}>
                <img alt=''  onClick={()=>{navigate('/movie',{state:{movie}})}} src={`${baseUrl}${movie.poster_path}`} style={{ width: "250px", height: "250px" }} />
                <p>{movie.original_title || movie.name || movie.title}</p>
                <p>{movie.vote_average}🌟</p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cast;
