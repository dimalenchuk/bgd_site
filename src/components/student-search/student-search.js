import React, { Component} from 'react';
import './student-search.css'

class StudentSearch extends Component {
    state = {
        term: ''
    };

    onSearchChange = (e) => {
        const term = e.target.value;
        this.setState({term});
        this.props.onSearchChange(term);
    };

    render() {
        return (
            <input
                className="stud_search"
                type="text" placeholder="Пошук по імені"
                value={this.state.term}
                onChange={this.onSearchChange}/>
        )
    }
}

export default StudentSearch;