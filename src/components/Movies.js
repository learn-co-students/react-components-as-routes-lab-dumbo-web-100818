import React from 'react';
import { movies } from '../data';

const Movies = () => {

  let movieList = movies.map(movie => {
    return (
      <div>
        <h3> Name: {movie.name} </h3>
        <h5> Time: {movie.time} minutes </h5>
        <h5> Genres:
          <ul>
            {
              movie.genres.map(
                genre => {
                  return (
                    <li> {genre} </li>
                  )
                }
              )
            }
          </ul>
        </h5>
      </div>
    )
  })

  return (
    <div>
      <h1> Movies Page </h1>
        {movieList}
    </div>
  );
};

export default Movies;
