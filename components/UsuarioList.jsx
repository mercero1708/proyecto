import React, { Component } from 'react'
import UsuarioService from '../service/UsuarioService';
//import confLogo from './styles/front2.png';
//import HeaderComponent from './HeaderComponent'
import '../index.css';
//import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';
import '../styles/acc.css';
//import Gravatar from './Gravatar';
class UsuarioList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuarios: []
        }
        this.addUsuario = this.addUsuario.bind(this);
        this.deleteUsuario = this.deleteUsuario.bind(this);
        this.editUsuario = this.editUsuario.bind(this);
    }
    deleteUsuario(id) {
        UsuarioService.deleteUsuario(id).then(res => {
            this.setState({ usuarios: this.state.usuarios.filter(usuario => usuario.id !== id) });
        });
    }
    

    viewUsuario(id) {
        this.props.history.push(`/view-usuario/${id}`);
    }

    editUsuario(id) {
        this.props.history.push(`/add-usuario/${id}`);
    }
    
    abrirModal=()=>{  
        this.setState({abierto: !this.state.abierto});
      }

    componentDidMount() {
        UsuarioService.getUsers().then((res) => {
            this.setState({ usuarios: res.data });
        });
    }

    
    addUsuario() {
        this.props.history.push('/add-usuario/_add');
    } 



    render() {
        const modalStyles={
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)'
          }

        return (
            <div className="tabla">
                <h2 className="text-center">Lista de empleados</h2>
                <div className="">
                  {/* <button className="btn btn-primary" onClick={this.editUsuario}> Add actualllllusuarios</button>*/}
                                  </div>            
             
                    <table id="lista_empeados" className="table table-striped table-bordered">

                        <thead>
                            <tr>
                                <th >Departamento</th>
                                <th>Nombre</th>
                                <th>Apellido</th>
                                <th>Username</th>
                                <th>E-mail</th>
                                <th> Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.usuarios.map(
                                    usuario =>
                                        <tr key={usuario.id}>
                                            <td> {usuario.username} </td>
                                            <td> {usuario.lastname}</td>
                                            <td> {usuario.nombre}</td>
                                            <td> {usuario.departamento}</td>
                                            <td> {usuario.email}</td>
                                            <td>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.viewUsuario(usuario.id)} id="d-usu" className="btn btn-info">View </button>
                                           
                                           
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.editUsuario(usuario.id)} className="btn btn-info">Update</button>
                                            <button style={{ marginLeft: "10px" }} onClick={() => this.deleteUsuario(usuario.id)} className="btn btn-danger">Delete</button>
                                                                  
                                            </td>         
                                            
                                                                    </tr>
                                )
                            }
                        </tbody>
                    </table>

                

            </div>
        )
    }
}

export default UsuarioList
