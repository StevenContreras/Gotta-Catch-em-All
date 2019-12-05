import React from 'react';
import Pokemans from "./Pokemans.jsx";

const PoketeamMap  = ({pokeTeam}) => (
  <div>
      {pokeTeam.map((poke, i) => (
        <Pokemans poke={poke} key={i} />
      ))}
  </div>
)

export default PoketeamMap;
