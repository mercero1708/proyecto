import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom'
import "../styles/acc.css";

import Box from '@material-ui/core/Box';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
class color extends React.Component {
    state = { color: '' }
    onChangeHandler = e => this.setState({
        color: e.target.value
    })

    render() {
        const styleObj = {
            background: this.state.color
        }

        return (
            <div style={styleObj} className="acce">
                <div className="ui card">
                    <div className="content">
                        <div className="header">
                            Color:{this.state.color}
                        </div>
                        <div className="ui search">
                        </div></div>                </div>


                <input className="prompt" onChange={this.onChangeHandler}
                    value={this.state.color}
                    type="text"    >

                </input>

            </div>)
    }
}
export default color