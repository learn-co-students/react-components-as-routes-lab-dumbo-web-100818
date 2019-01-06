import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList = actors.map(actor=>{
    return(
      <div>
      <h3>{actor.name}</h3>
      {actor.movies.map(movie=>{
        return <ul>{movie}</ul>
      })}
      </div>
    )
  })
  return (
    <div>
    <h1>Actors Page</h1>
      {actorsList}
    </div>
  );
};

export default Actors;
