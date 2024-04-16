import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Row from './7.Movie/Components/Row';
import request from './7.Movie/request';
import Header from './7.Movie/Components/Header'
import CastDetails from './7.Movie/Components/CastDetails'
import Movie from './7.Movie/Components/Movie'

import './App.css';

const App: React.FC = () => {
  return (
    <div className='App'>
    
      <Router>
        <Routes>
          <Route
            path='/'
            element={
              <>
                <Header/>
                <Row title="Netflix Originals" fetchUrl={request.fetchNetflixOriginals} isLargeRow />
                <Row title="Trending Movies" fetchUrl={request.fetchTrending} />
                <Row title="Top Rated Movies" fetchUrl={request.fetchTopRated} />
                <Row title="Horror Movies" fetchUrl={request.fetchHorrorMovies} />
                <Row title="Romance Movies" fetchUrl={request.fetchRomanceMovies} />
                <Row title="Action Movies" fetchUrl={request.fetchActionMovies} />
                <Row title="Comedy Movies" fetchUrl={request.fetchComedyMovies} />
                <Row title="Documentaries" fetchUrl={request.fetchDocumentaries} />
              </>
            }
          />
           <Route path='/movie' element={<Movie/>}/>
          <Route path='/cast/:castId/:castName' element={<CastDetails/>} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
