import React from 'react';

const Pokemans = ({poke}) => (
  <div>
      <h3>{poke.nombre}</h3>
      <h4>Poke# {poke.numero}</h4>
      <h4>Type: {poke.tipo}</h4>
      <img src={poke.img} />
      <h5>Amount: {poke.amount}</h5>
  </div>
)

export default Pokemans;