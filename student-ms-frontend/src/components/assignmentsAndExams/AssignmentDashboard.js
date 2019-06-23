import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import viewAssignments from "./viewAssignments";
import editAssignment from "./editAssignment";
import CreateAssignment from "./CreateAssignment";



class AssignmentDashboard extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="nav-link">
                        <Link to="/">Assignment Dashboard</Link>
                        <div >
                            <ul>
                                <li>
                                    <Link to="/" className="nav-link">Assignments</Link>
                                </li>
                                <li>
                                    <Link to="/create" className="nav-link">Create Assignment</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={viewAssignments} />
                    <Route path="/edit/:id" component={editAssignment} />
                    <Route path="/create" component={CreateAssignment} />
                </div>
            </Router>
        );
    }
}

export default ExamsDashboard;