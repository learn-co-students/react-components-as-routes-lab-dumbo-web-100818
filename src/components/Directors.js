import React from 'react';
import { directors } from '../data';

const Directors = () => {
  return (
    <div>
      <h1>Directors Page</h1>
      <div>{directors[0].name} {directors[0].movies.join(",")}</div>
      <div>{directors[1].name} {directors[1].movies.join(",")}</div>
      <div>{directors[2].name} {directors[2].movies.join(",")}</div>
    </div>
  );
}

export default Directors
