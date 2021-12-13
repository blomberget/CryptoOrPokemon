import GetRandomCrypto from './components/GetRandomCrypto';
import GetRandomPokemon from './components/GetRandomPokemon';
import Modal from './components/Modal';
import React, { Component } from 'react';




class App extends Component {
  constructor() {
    super();
    this.state = {
      counter: 0,
      showAnswer: false,
      answer: '',
      initiate: Math.floor(Math.random() * 2) + 1
    };
    this.showModal = this.showModal.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }


  getPokemonOrCrypto() {
    if (this.state.initiate === 1) {
      return <GetRandomCrypto />
    }
    else if (this.state.initiate === 2) {
      return <GetRandomPokemon />
    }
  }


  resetState() {
    this.setState({
      initiate: 0
    }, () => {
      this.update();
    });
  }



  update() {
    let newInitiate = Math.floor(Math.random() * 2) + 1;

    this.setState({
      initiate: newInitiate
    });

  }




  handleCryptoClick = () => {
    if (this.state.initiate === 1) {
      this.setState({
        counter: this.state.counter + 1,
        answer: 'You were correct!'
      });
    }
    else {
      this.setState({
        answer: 'You were wrong...'
      });
    }

    this.setState({ showAnswer: true });
    this.resetState();


  }

  handlePokemonClick = () => {
    if (this.state.initiate === 2) {
      this.setState({
        counter: this.state.counter + 1,
        answer: 'You were correct!'
      });
    }
    else {
      this.setState({
        answer: 'You were wrong...'
      });
    }
    this.setState({ showAnswer: true });
    this.resetState();

  }

  showModal = () => {
    this.setState({ showAnswer: true });
  };

  hideModal = () => {
    this.setState({ showAnswer: false });
  };



  render() {
    return (
      <div className="App">
        <h1>Crypto or Pokémon</h1>
        {this.getPokemonOrCrypto()}
        <div id="knappar">
          <button onClick={this.handleCryptoClick}>Crypto</button>
          <button onClick={this.handlePokemonClick}>Pokemon</button>
        </div>
        <Modal showAnswer={this.state.showAnswer} handleClose={this.hideModal}>
          <p>{this.state.answer}</p>
        </Modal>
        <h3>Points: {this.state.counter}</h3>
      </div>
    );
  }
}




export default App;
