import React, { Component} from 'react';
import StudentService from "../../services/student-service";
import './student-list.css'
import StudentSearch from "../student-search/student-search";

class StudentList extends Component {
    studentService = new StudentService();

    state = {
        studentsList: null,
        term: ""
    };
    componentDidMount() {
        this.studentService
            .getAllStudents()
            .then((studentsList)=> {
                this.setState({
                    studentsList
                });
            });
    }

    renderItems(arr) {
        if(arr) {
            return arr.map(({id, first_name, last_name, group_id, phone_number, e_mail}) => {
                return (
                    <div className="stud_info" key={id}>
                        <img className="stud_photo"
                             src="https://carlisletheacarlisletheatre.org/images/person-icon-png-android-9.png" alt=""/>
                        <p className="stud_name"><i className="icons_info fa fa-user"></i>  {first_name} {last_name}</p>
                        <p className="group"><i className="icons_info fa fa-users"></i>  {group_id}</p>
                        <p className="med_mark"><i className="icons_info fa fa-pencil"></i>  5</p>
                        <p className="visits"><i className="icons_info fa fa-eye"></i>  100%</p>
                        <p className="stud_mail"><i className="icons_info fa fa-envelope"></i>  {e_mail}</p>
                        <p className="stud_phone"><i className="icons_info fa fa-phone"></i>  {phone_number}</p>
                    </div>
                );
            });
        }
    }
    onSearchChange = (term) => {
        this.setState({term})
    }

    search(items, term) {
        if (term.length ===0 ) {
            return items;
        }
        else if (items&&term) {
            return items.filter((item) => {
                return item.first_name.toLowerCase().indexOf(term.toLowerCase()) > -1
                    || item.last_name.toLowerCase().indexOf(term.toLowerCase()) > -1
                    || item.group_id.toLowerCase().indexOf(term.toLowerCase()) > -1;
            });
        }
    }

    render() {
        const { studentsList, term} = this.state;
        const items = this.search(studentsList, term);
        const visibleItems = this.renderItems(items);
        return (
            <div className="students_stats">
                <h1 className="stud_id">Студенти</h1>
                <StudentSearch onSearchChange={this.onSearchChange}/>
                <div className="stud_blocks">
                    {visibleItems}
                </div>
            </div>
        )
    }
}

export default StudentList;

