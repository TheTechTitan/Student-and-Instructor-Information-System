import React, { Component } from 'react';
import {Link} from "react-router-dom";
import axios from 'axios';

const stView = props => (
    <tr>
        <td>{props.stView.courses}</td>
        <td>{props.stView.user}</td>

        {/*<td>*/}
            {/*<Link to={"/register/"+props.stView._id}>Register</Link>*/}
        {/*</td>*/}
    </tr>
)

export default class viewStudents extends Component {

    constructor(props) {
        super(props);
        this.state = {stView: []};
    }

    componentDidMount() {
        axios.get('http://localhost:5000/rest/api/StudentRouter')
            .then(response => {
                this.setState({ stView: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    studentList() {
        return this.state.stView.map(function(current, i){
            return <stView stv={current} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <h3>Students List</h3>
                <table className="table-striped" style={{ marginTop: 20, marginLeft:700 }} >
                    <thead>
                    <tr>
                        <th>Courses</th>
                        <th>User</th>

                    </tr>
                    </thead>
                    <tbody>
                    { this.studentList() }
                    </tbody>
                </table>
            </div>
        )
    }
}
