import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
import '../index.css';
import DeleteIcon from '@material-ui/icons/Delete';
import VisibilityIcon from '@material-ui/icons/Visibility';
import UpdateIcon from '@material-ui/icons/Update';


//import Gravatar from './Gravatar';

class boardadmin extends Component {
  constructor(props) {
    super(props)

    this.state = {
      tasks: []
    }
    this.addTasks = this.addTasks.bind(this);
    this.editTasks = this.editTasks.bind(this);
    this.deleteTasks = this.deleteTasks.bind(this);
  
  }

  componentDidMount() {
    EmployeeService.getTasks().then((res) => {
      this.setState({ tasks: res.data });

    });
  }

  editTasks() {
    this.props.history.push('/add-task/_add');
  }


  render() {
    return (
      <div className="Badge">
        <div className="Badge__header">

        </div>

        <h2 className="text-center">Listado jjde empleados</h2>
        <div className="row">
          <button className="btn btn-primary" onClick={this.addTasks}> Add Empleados</button>
        </div>
        <br></br>
        <div className="row">
          <DeleteIcon></DeleteIcon>
          <table className="table table-striped table-bordered">

            <thead>
              <tr>
                <th> task First Name</th>
                <th> task Last Name</th>
                <th> task Email Id</th>
                <th> task username</th>
                <th> imagen</th>
                <th> actualizar</th>
                <th> Borrar</th>

                <th> visualizar</th>

              </tr>
            </thead>
            <tbody>
              {
                this.state.tasks.map(
                  task =>
                    <tr key={task.id}>

                      <td> {task.firstName} </td>
                      <td> {task.lastName}</td>
                      <td> {task.emailId}</td>
                      <td> {task.userName}</td>
                      <img src="" alt="Logo " />
                      <td>
                        <button onClick={() => this.editTasks(task.id)} className="btn btn-info"><UpdateIcon>ddd</UpdateIcon>dddd  </button>
                      </td> <td> <button style={{ marginLeft: "10px" }} onClick={() => this.deleteTasks(task.id)} className="btn btn-danger">  <DeleteIcon></DeleteIcon></button>
                      </td><td> <button style={{ marginLeft: "10px" }} onClick={() => this.viewTasks(task.id)} className="btn btn-info"><VisibilityIcon></VisibilityIcon></button>
                      </td>
                    </tr>
                )
              }
            </tbody>
          </table>

        </div>

      </div>
    )
  }
}

export default boardadmin






















/**  render() {
    return (
      <div className="container">
        <header className="jumbotron">
          <h3>contenido de administrador esto serii{this.state.content}</h3>

        </header>
      </div>
    );
  }**/










