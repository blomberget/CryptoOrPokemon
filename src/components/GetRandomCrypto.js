import React, { Component } from 'react';

class GetRandomCrypto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            cryptos: [],
            crypto: '',
            loading: false
        }
        this.randomCrypto = this.randomCrypto.bind(this);
    }

    componentDidMount() {
        fetch('https://api.nomics.com/v1/markets?key=33a14a71ecb4c73ab95efadba9ca199d7a17158d')
            .then((response) => response.json())
            .then((data) => {
                this.setState({
                    cryptos: data,
                    loading: true
                }, () => {
                    this.randomCrypto();
                })
            })
            .catch(error => console.log('Error', error));
    }

    randomCrypto() {
        const randomNumber = Math.floor(Math.random() * this.state.cryptos.length);
        var cryptoName = this.capitalizeFirstLetter(this.state.cryptos[randomNumber].exchange);

        this.setState({
            crypto: cryptoName
        })
    }


    capitalizeFirstLetter(string) {
        string = string.replace(/_/g, "");
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
                    <h2 className='crypto'>
                        {this.state.crypto}
                    </h2>
                </div>
            );
        }
    }
}


export default GetRandomCrypto;