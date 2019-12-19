import React, {Component} from 'react';
import LoginUser from "./login-page/login-user";
import './Nav.css'

class Nav extends Component {
    render(){
        return (
            <LoginUser
                handleLoginChange={this.props.handleLoginChange}
                handleLogin={this.props.handleLogin}
                username={this.props.username}/>
        );
    }
}

export default Nav;

