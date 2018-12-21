import React from 'react';
import { directors } from '../data';

const Directors = () => {

    let directorList = directors.map(director => { return (
      <div>
        <h3> Name: {director.name} </h3>
        <h5> Movies:
          <ul>
            {
              director.movies.map(movie => {
                return(
                  <li> {movie} </li>
                )
              })
            }
          </ul>
        </h5>
      </div>
    )})
    
  return (
    <div>
      <h1>Directors Page</h1>
      {directorList}
    </div>
  );
}

export default Directors
