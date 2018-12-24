import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movie = movies.map( movie => {
    return (
      <div>
        <h3>Title: {movie.title}</h3>
        <h4>Time: {movie.time}</h4>
        <h4>Metascore: {movie.metascore}</h4>
        <h4>Genres</h4>
        <ul>
          {movie.genres.map( g => {
            return (
              <li>{g}</li>
            )
          })}
        </ul>
      </div>
    )
  })

  return (
    <div>
    <h1>Movies Page</h1>
        {movie}
    </div>
  );
};

export default Movies;
