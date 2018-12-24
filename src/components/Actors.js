import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actor = actors.map( actor => {
    return (
      <div>
      <h2> {actor.name}</h2>
      <h3>Movies </h3>
        <ul>
        {actor.movies.map( m => {
          return (
            <li>{m}</li>
          )
        })} </ul>
      </div>
    )
  })
  return (
    <div>
    <h1>Actors Page</h1>
      {actor}
    </div>
  );
};

export default Actors;
