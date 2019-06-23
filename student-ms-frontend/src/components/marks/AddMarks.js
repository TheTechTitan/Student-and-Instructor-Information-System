import React, {Component} from 'react';
import CourseList from './CourseList'
import SubjectList from "./SubjectList";
import AddCourse from './AddCourse'
import CourseFee from './CourseFee'
import ReactDOM from 'react-dom';
import { NavLink} from 'react-router-dom'

import 'bootstrap/dist/css/bootstrap.css'
import './marksCSS.css'
import MarksList from "./MarksList";
import MarksForm from "./MarksForm";
import SubjectForm from "./SubjectForm";

class Addmarks extends Component {
    constructor(props) {
        super(props);
        this.state = {
            subjects:[],
            marks:[],
            courseCode:String,
            subjectCode:String,
            MarksTrigger:false,
            SubTrigger:false

        }
    }


    getCourseSubjects(courseCode){

        this.setState({
            courseCode:courseCode,
            SubTrigger:true
        })

        /*e.preventDefault();*/
        const searchSubject=courseCode;
        /*const searchtext=this.refs.code.value;*/


        fetch('http://localhost:5000/course/get-course/'+searchSubject,{
            method: 'GET',
            headers: {'Content-Type': 'application/json'}
        }).then(response=>{
            return response.json();
        }).then((subjects)=>{
            this.setState({
                subjects:subjects
            },/*()=>console.log('heyyy okay now the subject array is raw..',searchSubject)*/)
        }).catch(err=>{
            alert("damnn "+err);
        })

    }

    getSubjectMarks(subjectCode){

        this.setState({
            subjectCode:subjectCode,
            MarksTrigger:true
        })

    }

    getGetCourseCode(courseCode){

        this.setState({
            courseCode:courseCode,
            SubTrigger:true
        })

    }



    render() {
        return(

            <div className="containerMarks">
                <div className="back img">


                    <NavLink to="/" style={{color:"white"}}>Home</NavLink>
                    <h1>ADD MARKS</h1>

                    <div className="row">

                        <div className="col-md-3">
                            <form className="padding sub">
                                <fieldset >

                                    <CourseList getCourseSub={this.getCourseSubjects.bind(this)}

                                    />

                                </fieldset>
                            </form>
                        </div>

                        <div className="col-md-3">
                            <form className="padding sub">
                                <fieldset >

                                    <SubjectList subs={this.state.subjects}
                                                 getSubMarks={this.getSubjectMarks.bind(this)}

                                    />

                                </fieldset>
                            </form>
                        </div>

                        <div className="col-md-3">
                            <form className="padding sub">
                                <fieldset >

                                    {
                                        this.state.SubTrigger===true? <SubjectForm cosCode={this.state.courseCode}/>:<div></div>

                                    }

                                </fieldset>
                            </form>
                        </div>



                        <div className="col-md-3">
                            <form className="padding sub">
                                <fieldset >

                                    {
                                        this.state.MarksTrigger===true? <MarksForm subCode={this.state.subjectCode}/>:<div></div>

                                    }

                                </fieldset>
                            </form>
                        </div>

                    </div>



                </div>

            </div>

        );
    }
}
export default Addmarks;
