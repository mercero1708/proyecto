import React, { Component } from 'react';
export class Button extends Component {
    render() {
        return (
           
            <button onClick={this.props.onClick} className={this.props.className} >
                {this.props.text}
            </button>
          
        );
    }
}