import React from 'react';
import axios from 'axios';
import PoketeamMap from './PoketeamMap.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pokeTeam: [],
    };
    this.getAllPokemon = this.getAllPokemon.bind(this);
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
  }

  render() {
    return (
      <div>
        <h1>Pokemon</h1>
        <PoketeamMap pokeTeam={this.state.pokeTeam}/>
      </div>
    )
  }
}

export default App;