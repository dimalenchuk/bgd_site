import React, { Component} from 'react';
import './head-bar.css'

class HeadBar extends Component {
    render() {
        return (
            <header>
                <div className="top-bar">
                    <div className="header_inner">
                        <nav className="nav">
                            {/*<a href="#"><i className="icon nav_link fa fa-search"></i></a>*/}
                            {/*<a href="#"><i className="icon nav_link fa fa-cog"></i></a>*/}
                            <a href="#" onClick={this.props.handleLogout}><i className="icon nav_link fa fa-sign-out" ></i></a>
                        </nav>
                    </div>
                </div>
            </header>
        )
    }
}


export default HeadBar;