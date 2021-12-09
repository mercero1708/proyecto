import React, { Component } from 'react'
import EmployeeService from '../service/EmployeeService'
import { Link } from "react-router-dom";

class ViewTasksComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            employee: {}
        }
    }

    componentDidMount(){
        EmployeeService.getEmployeeById(this.state.id).then( res => {
            this.setState({employee: res.data});
        })
    }

    render() {
        return (
            <div>
                <br></br>
                <div className = "card col-md-6 offset-md-3">
                    <h3 className = "text-center"> VIEW TASKS DETAILS </h3>
                    <div className = "card-body">
                        <div className = "row">
                            <label>TAREA ASIGNADA: </label>
                            <div> { this.state.employee.firstName }</div>
                        </div>
                        <div className = "row">
                            <label> HORAS IMPUTADAS: </label>
                            <div> { this.state.employee.lastName }</div>
                        </div>
                        <div className = "row">
                            <label> HORAS IMPUTADAS </label>
                            <div> { this.state.employee.emailId }
                            <div className="row">
              <Link to="/employeesTareas" >
                <button className="btn btn-info" > VOLVER   </button></Link>
            </div>
                            </div>
                        </div>
                    </div>

                </div>
                
            </div>
        )
    }
}


export default ViewTasksComponent
