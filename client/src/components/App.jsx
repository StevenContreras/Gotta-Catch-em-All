import React from 'react';
import axios from 'axios';
import PoketeamMap from './PoketeamMap.jsx';
import RandomEncounter from './RandomEncounter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeTeam: [],
      random: {}
    };
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getRandomPoke = this.getRandomPoke.bind(this);
  }

  randomizer(max) {
    return Math.floor(Math.random() * Math.floor(max));
  };

  getRandomPoke() {
    var rando = this.randomizer(151)
    axios.get(`https://pokeapi.co/api/v2/pokemon/${rando}/`)
    .then(({data}) => {
      var sorted = {};
      sorted.img = data.sprites.front_default;
      sorted.name = data.name;
      sorted.type = data.types[0].type.name;
      sorted.id = data.id;
      this.setState({
        random: sorted
      })
    })
    .catch((err) => console.error(err));
  }

  getAllPokemon() {
    axios.get("/allPokemon")
    .then(({data}) => {
      this.setState({
        pokeTeam: data
      })
    })
    .catch((err) => console.error(err));
  }

  componentDidMount() {
    this.getAllPokemon();
    this.getRandomPoke();
  }

  render() {
    return (
      <div>
        <h1>Pokemon</h1>
        <RandomEncounter random={this.state.random}/>
        <PoketeamMap pokeTeam={this.state.pokeTeam}/>
      </div>
    )
  }
}

export default App;