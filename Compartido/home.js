import React, { Component } from "react";

import UserService from "../service/UserService";
import color from"../accesibilidad/color" 
import "../styles/acc.css";


export default class Home extends Component {
    constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }

  componentDidMount() {
    UserService.getPublicContent().then(
      response => {
        this.setState({
          content: response.data
        });
      },
      error => {
        this.setState({
          content:
            (error.response && error.response.data) ||
            error.message ||
            error.toString()
        });
      }
    );
  }

  render() {
    return (
      
      <div className="container">
        <header className="">
          <h3>{this.state.content}Contenido </h3>        
      
<p style={{ fontSize: 11}}>Button Text</p>

        <button onClick={()=>{alert("dSe ha eliminado la tarea")}}>Dame onClick</button>
        </header>   <div>
           <color/>
         
         </div>
      </div>

      
    );
  }
}
