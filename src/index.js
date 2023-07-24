import React from 'react';
import ReactDOM from 'react-dom/client';
import SearchMovies from './components/SearchMovies/SearchMovies';

function Main() {
  return (
    <div className='container'>
      <h1 className='title'>React Movie Search</h1>
      <SearchMovies></SearchMovies>
    </div>
  );
} 

export default Main;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Main/>
);