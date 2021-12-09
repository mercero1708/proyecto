import React, { Component } from "react";

import UserService from "../service/UserService";
import "../styles/acc.css";

export default class boardCoordinador extends Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getModeratorBoard().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      <div className="container" id="boardCoor">
        <header className="jumbotron">
          <h3>MOderador{this.state.content}Moderator</h3>
          
        </header>
      </div>
    );
  }
}