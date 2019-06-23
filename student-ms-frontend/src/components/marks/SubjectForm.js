import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink} from 'react-router-dom'

class SubjectForm extends Component {
    constructor(props) {
        super(props);
        this.state = {

            objID:String,
            courseCode:this.props.cosCode
        }
    }

    addSubject(){


        const name=this.refs.name.value;
        const subjectCode=this.refs.subjectCode.value;

        var newSubject={"name":name,"subjectCode":subjectCode,"marks":[]}

        fetch('http://localhost:5000/subject/add-subject',{
            method: 'POST',
            body:JSON.stringify(newSubject),
            headers: {'Content-Type': 'application/json'}

        }).then(response=>{
            return response.json();
        }).then((objID)=>{
            /* this.setState({
                 objID:objID.objID
             },()=>console.log('raaittt got the objID >',this.state.objID))*/
            this.addSubjectsToCourse(objID.objID);
        }).catch(err=>{
            alert("addmarks "+err);
        })

    }

    addSubjectsToCourse(ob){


        fetch(`http://localhost:5000/course/add-course-subject/${this.state.courseCode}/${ob}`,{
            method: 'POST',
            headers: {'Content-Type': 'application/json'}
        }).then(response=>{
            return response.json();
        }).then((data)=>{
            console.log('data after link fetch',data)
        }).catch(err=>{
            alert("addmarkstoSub "+err);
        })
    }


    render() {
        return(

            <div>

                <div className="form-group">
                    <label >Subject Name</label>
                    <input id="subOne" className="form-control" placeholder="Subject Name" ref="name"/>
                </div>

                <div className="form-group">
                    <label >subject Code</label>
                    <input id="subOne3" className="form-control" placeholder="Subject code" ref="subjectCode"/>
                </div>


                <button type="button" className="btn btn-primary"  onClick={()=>this.addSubject()}>RELEASE SUBJECT MARKS</button>

            </div>
        );
    }
}
export default SubjectForm;
