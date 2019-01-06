import React from 'react';
import { movies } from '../data';

const Movies = () => {
  let movieList = movies.map(movie=>{
    return(<div>
       <h3>{movie.title}</h3>
      <h3>{movie.time}</h3>
      {movie.genres.map(genre=>{
        return <ul> {genre} </ul>
      })}

      </div>)
  })
  return (
    <div>
    <h1>Movies Page</h1>
        {movieList}
    </div>
  );
};

export default Movies;
