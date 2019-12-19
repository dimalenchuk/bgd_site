import React, { Component} from 'react';
import { Link } from 'react-router-dom';

import './side-bar.css';
class SideBar extends Component{
    render() {
        return (
            <div className="sidenav">
                <Link to="/news">Новини</Link>
                <Link to="/schedule">Розклад</Link>
                <Link to="/students">Студенти</Link>
            </div>
        );
    }
}

export default SideBar;