import GetRandomCrypto from './components/GetRandomCrypto';
import GetRandomPokemon from './components/GetRandomPokemon';
import React, { Component } from 'react';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      initiate: Math.floor(Math.random() * 2) + 1,
    }
  }


  getPokemonOrCrypto() {
    if (this.state.initiate === 1) {
      return <GetRandomCrypto />
    }
    else {
      return <GetRandomPokemon />
    }
  }


  /*  resetState(_callback) {
     this.setState({ initiate: 0 });
     console.log('Reset state:' + this.state.initiate);
 
   } */


  update () {

    this.setState({ initiate: 0 }, () => console.log(this.state.initiate));

    console.log(this.state.initiate);


    let newInitiate = Math.floor(Math.random() * 2) + 1;

    console.log(newInitiate);
    this.setState({
      initiate: newInitiate
    });

  }



  handleCryptoClick = () => {
    if (this.state.initiate === 1) {
      console.log('Crypto rätt');
      this.update();
    }
    else {
      console.log('Crypto fel');
    }

  }

  handlePokemonClick = () => {
    if (this.state.initiate === 2) {
      console.log('Pokemon rätt');
      this.update();
    }
    else {
      console.log('Pokemon fel');
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Crypto or Pokémon</h1>
        {this.getPokemonOrCrypto()}
        <div id="knappar">
          <button onClick={this.handleCryptoClick}>Crypto</button>
          <button onClick={this.handlePokemonClick}>Pokemon</button>
        </div>
      </div>
    );
  }
}



export default App;
