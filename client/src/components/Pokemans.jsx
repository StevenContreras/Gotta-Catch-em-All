import React from 'react';

const Pokemans = ({poke}) => (
  <div className="team">
      <img src={poke.img} />
      <h5>X {poke.amount}</h5>
  </div>
)

export default Pokemans;