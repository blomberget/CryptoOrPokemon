

import React, { Component } from 'react';

class GetRandomPokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
            pokemon: '',
            loading: false
        }
        this.randomPokemon = this.randomPokemon.bind(this);
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    pokemons: data.results,
                    loading: true
                }, () => {
                    this.randomPokemon();
                })
            })
            .catch(error => console.log('Error', error));
    }

    randomPokemon() {
        const randomNumber = Math.floor(Math.random() * this.state.pokemons.length);


        var pokemonName = this.capitalizeFirstLetter(this.state.pokemons[randomNumber].name);


        this.setState({
            pokemon: pokemonName
        })
    }



    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }




    render() {
        var { loading } = this.state;


        if (!loading) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }

        else {
            return (
                <div>
                    <h2 className='pokemon'>
                        {this.state.pokemon}
                    </h2>
                </div>
            );
        }
    }
}



export default GetRandomPokemon;



/*
class GetRandomPokemon extends Component {
    constructor(props) {
        super(props)
        this.state = {
            pokemons: [],
            pokemon: '',
            loading: false
        }
        this.randomPokemon = this.randomPokemon.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    componentDidMount() {
        fetch('https://pokeapi.co/api/v2/pokemon?limit=898')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    pokemons: data.results,
                    loading: true
                }, () => {
                    this.handleClick();
                })
            })
            .catch(error => console.log('Error', error));
    }

    randomPokemon() {
        const randomNumber = Math.floor(Math.random() * this.state.pokemons.length);

        var pokemonName = this.capitalizeFirstLetter(this.state.pokemons[randomNumber].name);
        return pokemonName;
    }

    handleClick() {
        const oneRandomPokemon = this.randomPokemon();

        this.setState({
            pokemon: oneRandomPokemon
        })
    }

    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }




    render() {
        var { loading } = this.state;


        if (!loading) {
            return (
                <div>
                    <h2>Loading...</h2>
                </div>
            )
        }

        else {
            return (
                <div>
                    <h2 className='pokemon'>
                        {this.state.pokemon}
                    </h2>

                    <Buttons handleClick={this.handleClick} />
                </div>
            );
        }
    }
}


class Buttons extends React.Component {

    render() {
        return (
            <div className='buttons'>
                <button id='new-pokemon' className='button' onClick={this.props.handleClick}>
                    New Pokemon
                </button>
            </div>
        )
    }
}

export default GetRandomPokemon; */