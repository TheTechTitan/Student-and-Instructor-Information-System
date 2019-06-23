import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import createExams from "./createExams";
import editExams from "./editExams";
import viewExams from "./viewExams";



class ExamsDashboard extends Component {
    render() {
        return (
            <Router>
                <div className="container">
                    <nav className="nav-link">
                        <Link to="/">Exams Dashboard</Link>
                        <div >
                            <ul>
                                <li>
                                    <Link to="/" className="nav-link">Exams</Link>
                                </li>
                                <li>
                                    <Link to="/create" className="nav-link">Create Exams</Link>
                                </li>
                            </ul>
                        </div>
                    </nav>
                    <br/>
                    <Route path="/" exact component={viewExams} />
                    <Route path="/edit/:id" component={editExams} />
                    <Route path="/create" component={createExams} />
                </div>
            </Router>
        );
    }
}

export default ExamsDashboard;