import React, { Component } from 'react';

export default class Cronometro extends Component {   
    constructor() {
        super();
        this.state = {
            contador: 0,
            estado: "Iniciar"
        }
        this.handleContadorplus = this.handleContadorplus.bind(this);
        this.handleContadorminus = this.handleContadorminus.bind(this);
        this.aumentar = this.aumentar.bind(this);
    }

    handleContadorplus() {
        if (this.state.estado === "Iniciar") {
            this.setState({
                estado: "Pausa"
            });
            this._interval = setInterval(this.aumentar, 1000);
        }
        else if (this.state.estado === "Pausa") {
            this.setState({
                estado: "Iniciar"
            });
            clearInterval(this._interval);
        }

    }
    aumentar() {
        if (this.state.estado === "Pausa") {
            this.setState({
                contador: this.state.contador + 1               
               
            });
        }
    }

    
    

    handleContadorminus() {
        this.setState({
            contador: 0,
            estado: "Iniciar"
        });
        clearInterval(this._interval);
    }
    render() {
        return (
            <div className=" text-center">

                <h1>{this.state.contador}</h1>
                

            </div>
        );
    }
}
                                                               
        