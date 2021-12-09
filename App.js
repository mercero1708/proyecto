  import React, { Component } from "react";
  import { Switch } from 'react-router-dom';
  import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles/acc.css";
//import "./App.css";
import AuthService from "./service/AuthService";
import Login from "./components/login";
import Register from "./components/register";
import Home from "./Compartido/home";
import Profile from "./components/profile";
import BoardUser from "./components/boardUser";
import boardCoordinador from "./components/boardCoordinador";
import BoardAdmin from "./components/boardadmin";

import UploadFiles from "./file//UploadFiles";
import cronometro from "./Compartido/cronometro";
import LogadoDate from "./Compartido/LogadoDate";
import UsuarioList from "./components/UsuarioList";
import ViewUsuario from "./components/ViewUsuario";
import Toggle from "./accesibilidad/Toggle";
import colorBg from "./accesibilidad/colorBg";
import color from "./accesibilidad/color";
import noticiasComponent from "./Ofertas/noticiasComponent";
import NoticiaList from "./Ofertas/NoticiaList";
import NewNoticias from "./Ofertas/NewNoticias";
import UpdateUsuario from "./components/UpdateUsuario";
import viewjob from "./Ofertas/viewJob";
import NotiForm from "./Ofertas/NotiForm";
import listaFile from "./file/listaFile";
import front from './img/front.png';
import CreateTasksComponent from './Task/CreateTasksComponent';
import ViewTasksComponent from './Task/ViewTasksComponent';
import ListTasksComponent from './Task/ListTasksComponent';
import UpdateTasksComponent from './Task/UpdateTasksComponent';
import CookieConsent, { Cookies } from "react-cookie-consent";
//import { AbilityBuilder } from 'casl'

class App extends Component {

  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);

    this.state = {
      showCoordinadorBoard: false,
      showAdminBoard: false,
      showUserBoard: false,
      currentUser: undefined,
    };
  }
  onChangeHandler = e => this.setState({
    color: e.target.value
  })

  componentDidMount() {
    const user = AuthService.getCurrentUser();

    if (user) {
      this.setState({
        currentUser: user,
        showCoordinadorBoard: user.roles.includes("ROLE_COORDINADOR"),
        showAdminBoard: user.roles.includes("ROLE_ADMIN"),
        showUserBoard: user.roles.includes("ROLE_USER"),
      });
    }
  }

  logOut() {
    AuthService.logout();
  }

  render() {
    const { currentUser, showCoordinadorBoard, showUserBoard, showAdminBoard } = this.state;

    const styleObj = {
      background: this.state.color
    }
    return (
      <div>
        <nav id="nav" className=" navbarnavbar-expand navbar-dark bg-dark">
        <img className="Navbar__brand-logo" src={front} alt="Logo" />     
        <li><Link to={"/"} className="navbar-brand">Portal del Empleado</Link></li>  
        <li> <Link to={"/home"}className="navbar-brand"> Home </Link> </li>
        <li><a href="/login"className="navbar-brand" onClick={this.logOut}>LogOut</a></li>
        <li><Link to={"/profile"} className="navbar-brand"> Perfil</Link></li>  

          <div className="navbar-nav mr-auto">               
            {showUserBoard && (            
                <li id="navU" className="nav-item"><Link to={"/employeesTareas"} className="nav-link"> Tareas</Link> 
                <li>   <Link to={"/UploadFiles"} className="nav-link"> archivos</Link></li>
                <li>   <Link to={"/view"} className="nav-link"> Noticias</Link></li>
              </li>
            )}
            {showCoordinadorBoard && (
              <li id="navB" className="nav-item"> <Link to={"/TaskEmployees"} className="nav-link">Lista de tareas</Link>
                <li> <Link to={"/listaFile"} className="nav-link"> archivos</Link> </li>                     
                <li><Link to={"/UsuarioList"} className="nav-link">    Lista de usuarios</Link>       </li>               
                <li><Link to={"/view"}className="nav-link">   Noticias</Link>  </li>
                <li>  <Link to={"/coordinador"} className="nav-link">  coordinador  </Link></li>
              </li>

              
            )}

                       {showAdminBoard && showCoordinadorBoard && currentUser(

            )}

            {showAdminBoard && (
              <li id="navA"> <Link to={"/employeesTareas"} className="nav-link">Lista de tareas  </Link>
               <li> <Link to={"/register"} className="nav-link">   Nuevo empleado    </Link></li>
                <li><Link to={"/noticias"} className="nav-link"> Noticias</Link></li>
                <li><Link to={"/listaFile"} className="nav-link"> archivos</Link></li>
                <li> <Link to={"/UsuarioList"} className="nav-link">Lista de usuarios  </Link>  </li>

               
              </li>
            )}

           <CookieConsent debug={true} location="bottom" style={{background:'red',textAling:"left"}}
           buttonStyle={{color:"#000", background:"teal",fontSize:"14px"}}
           buttonText="Fenomenal"
           expires={10}>
             This site uses cookies. See our   <a href ="/privacy"> Privacy policy</a> for more   </CookieConsent> 
            {currentUser && (
              <li className="nav-item">

              </li>
            )}
          </div>

          {currentUser ? (
            <div className="navbar-nav ml-auto">
              
             
            </div>
          ) : (
            <div className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link to={"/login"} className="nav-link">
                  Login
                </Link>
              </li>

             
            </div>
          )
          }

        </nav>
        <div style={styleObj} className="container">
          <div className="ui card">
            <div className="content">
              <div className="header">
                Color:{this.state.color}

              </div>
              <div className="ui search">
              </div></div>

          </div>
          <input className="prompt" onChange={this.onChangeHandler}
            value={this.state.color}
            type="text"  >
          </input>

          <div className="container mt-3">

            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path="/login" component={Login} /> 
              <Route exact path="/register" component={Register} />
              <Route exact path="/profile" component={Profile} />
              <Route path="/user" component={BoardUser} />
              <Route path="/coordinador" component={boardCoordinador} />
              <Route path="/admin" component={BoardAdmin} />             

              <Route path="/UploadFiles" component={UploadFiles} />
              <Route path="/cronometro" component={cronometro} />
              <Route path="/LogadoDate" component={LogadoDate} />
              <Route path="/listaFile" component={listaFile} />
            

              <Route path="/Toggle" component={Toggle} ></Route>
              <Route path="/colorBg" component={colorBg} ></Route>
              <Route path="/color" component={color} ></Route>

              <Route path="/noticias" component={NoticiaList} ></Route>
              <Route path="/add" component={NewNoticias} ></Route>
              <Route path="/noticia/:id" component={noticiasComponent} ></Route>
              <Route path="/view" component={viewjob} ></Route>
              <Route path="/email" component={NotiForm} ></Route>

              <Route path="/UsuarioList" component={UsuarioList} ></Route>
              <Route path="/add-usuario/:id" component={Register}></Route>
              <Route path="/view-usuario/:id" component={ViewUsuario}></Route>
              <Route path="/update-usuario/:id" component={UpdateUsuario}></Route>
              <Route path="/ViewUsuario" component={ViewUsuario} ></Route>                
              <Route path = "/" exact component = {ListTasksComponent}></Route>
              <Route path = "/employeesTareas" component = {ListTasksComponent}></Route>
              <Route path = "/add-employee/:id" component = {CreateTasksComponent}></Route>
              <Route path = "/view-employee/:id" component = {ViewTasksComponent}></Route>
                          </Switch>

          </div>
        </div>
      </div>

    );
  }
}

export default App;