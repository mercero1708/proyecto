import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import AuthService from "../service/AuthService";
import { Link } from "react-router-dom";
import MaterialTable from "material-table";
export default class Profile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      redirect: null,
      userReady: false,
      currentUser: { username: "" }
    };
  }


  componentDidMount() {
    const currentUser = AuthService.getCurrentUser();

    if (!currentUser) this.setState({ redirect: "/home" });
    this.setState({ currentUser: currentUser, userReady: true })
  }

  render() {

    if (this.state.redirect) {
      return <Redirect to={this.state.redirect} />
    }

    const { currentUser } = this.state;
    console.log("usuario" + currentUser);

    return (
      <div className="container">


        {(this.state.userReady) ?
          <div>
            <header className="jumbotron">
              <h3>
                Bienvenido  <strong>{currentUser.username}</strong> !!!!
          </h3>

              <h3>

              </h3>
            </header>
            <table className="table table-striped table-bordered">

              <thead>
                <tr>
                  <th> Numero de Empleado</th>
                  <th> TOKEN</th>
                  <th> Departamento</th>
                  <th> Rol</th>

                </tr>
              </thead>

              <td>
                {currentUser.id}</td>
              <td>
                {currentUser.accessToken.substring(0, 20)} ...{" "}
                {currentUser.accessToken.substr(currentUser.accessToken.length - 20)}
              </td>
              <td>
                {currentUser.departamento}</td>
              <td>
                {currentUser.roles &&
                  currentUser.roles.map((role, index) => <li key={index}>{role}</li>)}
              </td>
            </table>
            <div className="row">
              <Link to="/UploadFiles" >
                <button className="btn btn-primary" onClick={this.UploadFiles}> Subir archivo </button></Link>
            </div>

          </div> : null}
      </div>
    );
  }
}