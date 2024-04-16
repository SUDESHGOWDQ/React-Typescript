import { Link, useLocation } from "react-router-dom";
import YouTube from 'react-youtube';
import './Movie.css';
import { useState, useEffect } from "react";

type Movie = {
  id: number;
  name?: string;
  title?: string;
  overview: string;
  vote_average: number;
  poster_path: string;
};

const Movie: React.FC = () => {
  const [movieTrailer, setMovieTrailer] = useState<string | null>(null);
  const [movieCast, setMovieCast] = useState<any[]>([]); // Adjust type accordingly
  const location = useLocation();
  const specificMovie: Movie = location.state?.movie;
  const baseUrl = "https://image.tmdb.org/t/p/original/";

  const opts = {
    height: "390",
    width: "100%",
  };

  useEffect(() => {
    const fetchTrailer = async (id: number) => {
      const response = await fetch(`http://api.themoviedb.org/3/movie/${id}/videos?api_key=ab1da08307f82007e9975d4dccf67670`);
      const data = await response.json();
      if (data.results && data.results.length > 0) {
        setMovieTrailer(data.results[0].key);
      }
    };

    const fetchMovieCasts = async (id: number) => {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=ab1da08307f82007e9975d4dccf67670&language=en-US`);
      const data = await response.json();
      if (data.cast) {
        setMovieCast(data.cast);
      }
    };

    if (specificMovie) {
      fetchTrailer(specificMovie.id);
      fetchMovieCasts(specificMovie.id);
    }
  }, [specificMovie]);

  return (
    <section>
      <div className="Movie_page" style={{
        background: `url("https://image.tmdb.org/t/p/original/${specificMovie?.poster_path}")`,
        backgroundSize: 'cover',
        height: '100vh'
      }}>
        <img className="Movie_image" src={`${baseUrl}${specificMovie?.poster_path}`} alt="Movie Poster" />
        <div className="Movie_content">
          <h1 className="Movie_title">{specificMovie?.name || specificMovie?.title}</h1>
          <p>{specificMovie?.overview}</p>
          <p>{specificMovie?.vote_average}/10⭐</p>
          <button className="Movie_button" onClick={() => setMovieTrailer(null)}>Play Trailer</button>
          <button className="Movie_button" onClick={() => setMovieCast([])}>Cast</button>
        </div>
      </div>
      <div className="castimgblock">
        {movieCast.slice(0, 10).map((x) => (
          <div key={x.cast_id}>
            <Link to={`/cast/${x.cast_id}/${x.original_name}`}>
              <img src={`${baseUrl}${x.profile_path}`} alt="Cast Member" style={{ width: "100px", height: "100px" }} />
            </Link>
            <p style={{ color: 'white' }}>{x.name}</p>
          </div>
        ))}
      </div>
      <div>
        {movieTrailer && <YouTube videoId={movieTrailer} opts={opts} />}
      </div>
    </section>
  );
};

export default Movie;
