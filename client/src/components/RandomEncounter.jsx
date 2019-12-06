import React from 'react';

const RandomEncounter = ({random}) => (
    <div>
      <h2>Random Attack!</h2>
      <button onClick={() => (console.log("Clicked"))}>
        <h3>{random.name}</h3>
        <h4>Poke# {random.id}</h4>
        <h4>Type: {random.type}</h4>
        <img src={random.img}/>
      </button>
    </div>
)

export default RandomEncounter;