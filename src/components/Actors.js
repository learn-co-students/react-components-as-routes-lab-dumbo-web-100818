import React from 'react';
import { actors } from '../data';

const Actors = () => {
  return (
    <div>
      <h1>Actors Page</h1>
      <div>{actors[0].name} {actors[0].movies.join(",")}</div>
      <div>{actors[1].name} {actors[1].movies.join(",")}</div>
      <div>{actors[2].name} {actors[2].movies.join(",")}</div>
      <div>{actors[3].name} {actors[3].movies.join(",")}</div>
    </div>
  );
};

export default Actors;
