import React from 'react';
import { actors } from '../data';

const Actors = () => {
  let actorsList = actors.map(actor => {
    return (
      <div>
        <h3> {actor.name} </h3>
        <h5>
          Movies:
          <ul>
            {
              actor.movies.map(movie => {
                return (
                  <li>{movie}</li>
                )
              })
            }
          </ul>
        </h5>
      </div>
    )
  })
  return (
    <div>
      {actorsList}
    </div>
  );
};

export default Actors;
