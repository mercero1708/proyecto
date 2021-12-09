import React, { Component } from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";
import { isEmail } from "validator";
//import Gravatar from "./Gravatar";
import AuthService from "../service/AuthService"
import UsuarioService from "../service/UsuarioService"

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
export default class Register extends Component {
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
      departamento:"",
      nombre:"",
      lastname:"",
      email: "",
      password: "",
      role:"",
      rol:"",

      successful: false,
      message: ""
    };
  }

  componentDidMount() {

    // step 4
    if (this.state.id === '_add') {
        return
    } else {
      UsuarioService.getUserById(this.state.id).then((res) => {
            let usuario = res.data;
            this.setState({
                firstName: usuario.firstName,
                lastName: usuario.lastName,
                emailId: usuario.email,
                userName: usuario.nombre,
                tarea: usuario.departamento,
                rol:usuario.rol
            });
        });
    }
}
  
  onChangeUsername(e) {
    this.setState({
      username: e.target.value
    });
  }
       
  onChangeDepartamento(e) {
    this.setState({
      departamento: e.target.value
    });
  }
  onChangeNombre(e) {
    this.setState({
      nombre: e.target.value
    });
  }
  onChangeLastName(e) {
    this.setState({
      lastname: e.target.value
    });
  }

  onChangeEmail(e) {
    this.setState({
      email: e.target.value
    });
  }

  onChangePassword(e) {
    this.setState({
      password: e.target.value
    });
  }
  onChangeRole(e) {
    this.setState({
      rol: e.target.value
    });
  }

  handleRegister(e) {
    e.preventDefault();

    this.setState({
      message: "",
      successful: false
    });


    this.form.validateAll();

    if (this.checkBtn.context._errors.length === 0) {
      AuthService.register(
        this.state.username,
        this.state.departamento,
        this.state.nombre,
        this.state.lastname,
        this.state.email,
        this.state.password,
        this.state.rol,
      ).then(
        response => {
          this.setState({
            message: response.data.message,
            successful: true
          });
        },
        
        error => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();

          this.setState({
            successful: false,
            message: resMessage
          }
          
          );
        }
        
      );
     
    }

    
  }
  changeTitulo() {
    if (this.state.id === '_add') {
        return <h3 className="text-center">Add usuario</h3>
    } else {
        return <h3 className="text-center">NUEVO EMPLEADO</h3>
    }
}

  render() {
    return (
      <div className="col-md-12">
        <div className="card card-container">

          
        <div> {
                                this.changeTitulo()
                            }</div>
     

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
                    validations={[required, vdepartamento]}ç
                   
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
                   <label>  
          ROL
                  <select value={this.state.rol}onChange={this.onChangeRole}>
                    <option value="user">Usuario</option>
                    <option value="coordinador">Ccoordinador</option>
                    <option value="admin">Administrador</option>
                    
                  </select>
                  </label>
                   </div>                                                                                               
                <div className="form-group">
                  <button className="btn btn-primary btn-block">Alta Usuario</button>
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
