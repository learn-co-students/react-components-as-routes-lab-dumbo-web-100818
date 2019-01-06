import React from 'react';
import { directors } from '../data';

const Directors = () => {
  let directorsList = directors.map(director=>{
    return(
      <div>
      <h3>{director.name}</h3>
      {director.movies.map(movie=>{
        return <ul>{movie}</ul>
      })}
      </div>
    )
  })
  return (
    <div>
    <h1>Directors Page</h1>
      {directorsList}
    </div>
  );
}

export default Directors
