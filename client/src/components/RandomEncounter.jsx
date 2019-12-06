import React from 'react';

const RandomEncounter = ({random, pokeball}) => (
    <div>
      <h2>Random Attack!</h2>
      <button onClick={() => (pokeball(random))}>
        <h3>{random.name}</h3>
        <h4>Poke# {random.id}</h4>
        <h4>Type: {random.type}</h4>
        <img src={random.img}/>
      </button>
    </div>
)

export default RandomEncounter;