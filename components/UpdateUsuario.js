import React, { Component } from 'react'
import UsuarioService from '../service/UsuarioService';
import Gravatar from "./Gravatar";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator"; import Form from "react-validation/build/form";
//import LogadoDate from './LogadoDate';
const required = value => {
  if (!value) {
    return (
      <div className="alert alert-danger" role="alert">
        This field is required!
      </div>
    );
  }
};

const email = value => {
  if (!isEmail(value)) {
    return (
      <div className="alert alert-danger" role="alert">
        This is not a valid email.
      </div>
    );
  }
};

const vusername = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The username must be between 3 and 20 characters.
      </div>
    );
  }
};

const vdepartamento = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The departamentp must be between 3 and 20 characters.
      </div>
    );
  }
};
const vnombre = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The nombre must be between 3 and 20 characters.
      </div>
    );
  }
};
const vlastname = value => {
  if (value.length < 3 || value.length > 20) {
    return (
      <div className="alert alert-danger" role="alert">
        The apellido must be between 3 and 20 characters.
      </div>
    );
  }
};
const vpassword = value => {
  if (value.length < 6 || value.length > 40) {
    return (
      <div className="alert alert-danger" role="alert">
        The password must be between 6 and 40 characters.
      </div>
    );
  }
};
class UpdateUsuario extends Component {
  constructor(props) {
    super(props);
    this.handleRegister = this.handleRegister.bind(this);
    this.onChangeUsername = this.onChangeUsername.bind(this);
    this.onChangeDepartamento = this.onChangeDepartamento.bind(this);
    this.onChangeNombre = this.onChangeNombre.bind(this);
    this.onChangeLastName = this.onChangeLastName.bind(this);
    this.onChangeEmail = this.onChangeEmail.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onChangeRole = this.onChangeRole.bind(this);

    this.state = {
      username: "",
      departamento: "",
      nombre: "",
      lastname: "",
      email: "",
      password: "",
      role: "",

      successful: false,
      message: ""
    };
  }

  componentDidMount() {
    UsuarioService.getUserById(this.state.id).then((res) => {
      let usuario = res.data;
      this.setState({
        departamento: usuario.departamento,
        firstName: usuario.nombre,
        lastName: usuario.lastName,
        emailId: usuario.emailId,
        userName: usuario.userName,
        departamento: usuario.departamento,

      });
    });
  }

  updateUser = (e) => {
    e.preventDefault();
    this.setState({ loading: false, error: null });
    let usuario = { departamento: this.state.departamento, firstName: this.state.firstName, lastName: this.state.lastName, email: this.state.email };
    console.log('usuario => ' + JSON.stringify(usuario));
    console.log('id => ' + JSON.stringify(this.state.id));
    UsuarioService.updateUser(usuario, this.state.id).then(res => {
      this.props.history.push('/usuarios');
    });
  }




  onChangeNombre = (event) => {
    this.setState({ NOMBRE: event.target.value });
  }

  onChangeLastName = (event) => {
    this.setState({ lastName: event.target.value });
  }

  onChangeEmail = (event) => {
    this.setState({ email: event.target.value });
  }
  onChangeUsername = (event) => {
    this.setState({ userName: event.target.value });
    //Cogemos e valor del input-->event.target.value
  }
  onChangeDepartamento = (event) => {
    this.setState({ nombre: event.target.value });
  }
  onChangePassword = (event) => {
    this.setState({ Password: event.target.value });
  }

  cancel() {
    this.props.history.push('/usuarios');
  }

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">UPTUALLLLLL
                  <Gravatar

            email={this.state.email}
            alt="profile-img"

          />

          <Form
            onSubmit={this.handleRegister}
            ref={c => {
              this.form = c;
            }}
          >
            {!this.state.successful && (
              <div>
                <div className="form-group">
                  <label htmlFor="username">Username</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="username"
                    value={this.state.username}
                    onChange={this.onChangeUsername}
                    validations={[required, vusername]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="departamento">departamento</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="departamento"
                    value={this.state.departamento}
                    onChange={this.onChangeDepartamento}
                    validations={[required, vdepartamento]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="nombre">nombre</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="nombre"
                    value={this.state.nombre}
                    onChange={this.onChangeNombre}
                    validations={[required, vnombre]}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="lastname">lastname</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="lastname"
                    value={this.state.lastname}
                    onChange={this.onChangeLastName}
                    validations={[required, vlastname]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <Input
                    type="text"
                    className="form-control"
                    name="email"
                    value={this.state.email}
                    onChange={this.onChangeEmail}
                    validations={[required, email]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">Password</label>
                  <Input
                    type="password"
                    className="form-control"
                    name="password"
                    value={this.state.password}
                    onChange={this.onChangePassword}
                    validations={[required, vpassword]}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="password">rol</label>
                  <br></br>
                  <select value={this.state.rol}>
                    <option value="user">Usuario</option>
                    <option value="coordinador">coordinador</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Alta</button>
                </div>
              </div>
            )}

            {this.state.message && (
              <div className="form-group">
                <div
                  className={
                    this.state.successful
                      ? "alert alert-success"
                      : "alert alert-danger"
                  }
                  role="alert"
                >
                  {this.state.message}
                </div>
              </div>
            )}
            <CheckButton
              style={{ display: "none" }}
              ref={c => {
                this.checkBtn = c;
              }}
            />
          </Form>
        </div>
      </div>
    );
  }
}



export default UpdateUsuario
