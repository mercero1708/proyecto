import React, { Component } from 'react'
import { Button } from '@material-ui/core'

import { Link } from 'react-router-dom';
import UsuarioService from '../service/UsuarioService';

class ViewUsuario extends Component {
    constructor(props) {
        super(props)
        var today = new Date(),
            time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        this.state = {
            currentTime: time
        }

        this.state = {
            date: '',
            id: this.props.match.params.id,
            usuario: {}
        }
    }
    componentDidMount() {
        UsuarioService.getUserById(this.state.id).then(res => {
            this.setState({ usuario: res.data });
        })
    }
    handleClick() {
        alert('Tehas logado correctamente');
    }

    documentClick() {
        alert('Vas a gestionar documentos');

    }

    render() {
       
        return (
            <div>
                <br></br>
                <div className="card col-md-6 offset-md-3">
                    <h3 className="text-center"> Estos son</h3>
                    <div className="card-body">
                        <div className="row">
                            <label> Usuarios   </label>
                            
                        </div>                            <div className="row">
                            <label> Apellido: </label>
                            <div> {this.state.usuario.departamento }</div>
                        </div>

                        <div className="row">
                            <label> Correo electronicao: </label>
                            <div> {this.state.usuario.nombre }</div>
                        </div>
                        <div className="row">
                            <label> kkklkllklklk : </label>
                        jjjjj {this.state.usuario.lastname }
                        </div>
                        <div className="row">
                            <label> task Hora de logado: </label>
                            <div>jjjjj {this.state.usuario.departamento }</div>

                        </div>

                    </div>
                </div>  <td>    {"Hora:  " + this.hora}
                    {"   Minutos:  " + this.minutos}  {"   Segundos:  " + this.segundos}</td>

                <div> {"Año " + this.ano} {"Mes  " + this.mes} {"Dia  " + this.dia}



                </div>  <Link to="/UploadFiles" >  <Button color="primary" variant='contained' onClick={this.handleClick} >  Entra para Logarse </Button>

                </Link>
                <Link to="/UploadFiles" >  <Button color="primary" variant='contained' onClick={this.documentClick} > Gestion de documentos </Button> </Link>
            </div>
        )
    }


}

export default ViewUsuario
