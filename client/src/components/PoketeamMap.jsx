import React from 'react';
import Pokemans from "./Pokemans.jsx";

const PoketeamMap  = ({pokeTeam}) => (
  <div>
    <h2>Your Poketeam</h2>
      {pokeTeam.map((poke, i) => (
        <Pokemans poke={poke} key={i} />
      ))}
  </div>
)

export default PoketeamMap;
