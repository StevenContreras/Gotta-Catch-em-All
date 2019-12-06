import React from 'react';
import axios from 'axios';
import PoketeamMap from './PoketeamMap.jsx';
import RandomEncounter from './RandomEncounter.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeTeam: [],
      random: {},
      login: false,
      info: ''
    };
    this.getAllPokemon = this.getAllPokemon.bind(this);
    this.getRandomPoke = this.getRandomPoke.bind(this);
    this.pokeball = this.pokeball.bind(this);
    this.infoType = this.infoType.bind(this);
    this.login = this.login.bind(this);
  }

  login() {
    this.setState({
      login: true
    });
  }

  infoType(e) {
    this.setState({
      info: e.target.value
    });
    console.log(this.state.info);
  }

  pokeball(pokemon) {
    if (this.randomizer(4) === 1) {
      alert("Pokemon Captured!")
      axios.post("/capture", pokemon)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      })
      this.getAllPokemon();
      this.getRandomPoke();
    } else {
      alert("Failed to capture pokemon")
      this.getRandomPoke();
    }
  }
  
  getRandomPoke() {
    var rando = this.randomizer(150)
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
  
  randomizer(max) {
    return Math.floor(Math.random() * Math.floor(max)) + 1;
  };

  componentDidMount() {
    this.getAllPokemon();
    this.getRandomPoke();
  }

  render() {
    return (
      <div>
        <h1>Pokemon</h1>
        <div> 
          {this.state.login ? (
          <div>
            <RandomEncounter random={this.state.random} pokeball={this.pokeball}/>
            <PoketeamMap pokeTeam={this.state.pokeTeam}/>
          </div>
          ) : (
          <div>
            <h4>Please Login for your poketeam</h4>
            <input
            type="text" value={this.state.info} 
            onChange={this.infoType} 
            placehoder="Your Login info"></input>
            <button onClick={this.login}>enter</button>
          </div>
          )}
        </div>
      </div>
    )
  }
}

export default App;