import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService';
import { Link } from "react-router-dom";

class CreateTasksComponent extends Component {    constructor(props) {
    super(props)

    this.state = {
        // step 2
        id: this.props.match.params.id,
        firstName: '',
        lastName: '',
        emailId: ''
    }
    this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
    this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
    this.saveOrUpdateEmployee = this.saveOrUpdateEmployee.bind(this);
}

// step 3
componentDidMount(){

    // step 4
    if(this.state.id === '_add'){
        return
    }else{
        EmployeeService.getEmployeeById(this.state.id).then( (res) =>{
            let employee = res.data;
            this.setState({firstName: employee.firstName,
                lastName: employee.lastName,
                emailId : employee.emailId
            });
        });
    }        
}
saveOrUpdateEmployee = (e) => {
    e.preventDefault();
    let employee = {firstName: this.state.firstName, lastName: this.state.lastName, emailId: this.state.emailId};
    console.log('employee => ' + JSON.stringify(employee));

    // step 5
    if(this.state.id === '_add'){
        EmployeeService.createEmployee(employee).then(res =>{
            this.props.history.push('/employeesTareas');
        });
    }else{
        EmployeeService.updateEmployee(employee, this.state.id).then( res => {
            this.props.history.push('/employeesTareas');/**ACTUALIZA*/
        });
    }
}

changeFirstNameHandler= (event) => {
    this.setState({firstName: event.target.value});
}

changeLastNameHandler= (event) => {
    this.setState({lastName: event.target.value});
}

changeEmailHandler= (event) => {
    this.setState({emailId: event.target.value});
}

cancel(){
    this.props.history.push('/employeesTareas');
}

getTitle(){
    if(this.state.id === '_add'){
        return <h3 className="text-center">Add TAREAS V</h3>
    }else{
        return <h3 className="text-center">Update Tareas</h3>
    }
}
render() {
    return (
        <div>
            <br></br>
               <div className = "container">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className = "card-body">
                                <form>
                                    <div className = "form-group">
                                        <label> NOMBRE DEL EMPLEADO: </label>
                                        <input placeholder="First Name" name="firstName" className="form-control" 
                                            value={this.state.firstName} onChange={this.changeFirstNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> TAREA ASIGNADA: </label>
                                        <input placeholder="Last Name" name="lastName" className="form-control" 
                                            value={this.state.lastName} onChange={this.changeLastNameHandler}/>
                                    </div>
                                    <div className = "form-group">
                                        <label> HORAS IMPUTADAS: </label>
                                        <input placeholder="Email Address" name="emailId" className="form-control" 
                                            value={this.state.emailId} onChange={this.changeEmailHandler}/>
                                    </div>

                                    <button className="btn btn-success" onClick={this.saveOrUpdateEmployee}>Save</button>
                                    <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>

               </div>
        </div>
    )
}
}

export default CreateTasksComponent
