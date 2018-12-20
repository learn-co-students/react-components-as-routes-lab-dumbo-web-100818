import React from 'react';
import { movies } from '../data';

const Movies = () => {
  return (
    <div>
        <h1>Movies Page</h1>
        <div>{movies[0].title} {movies[0].time} {movies[0].genres.join(",")}</div>
        <div>{movies[1].title} {movies[1].time} {movies[1].genres.join(",")}</div>
        <div>{movies[2].title} {movies[2].time} {movies[2].genres.join(",")}</div>

    </div>
  );
};

export default Movies;
