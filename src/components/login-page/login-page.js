import React, { Component} from 'react';
import './login-page.css';
import LoginForm from "../login-form";

class LoginPage extends Component {
    render() {
        return (
            <div className="login">
                <div className="intro_block">
                    <div className="journal_name">
                        <p>i</p>
                        <p>J</p>
                        <p>o</p>
                        <p>u</p>
                        <p>r</p>
                        <p>n</p>
                        <p>a</p>
                        <p>l</p>
                    </div>
                    <h3 className="for_whom">для викладачів</h3>
                </div>
                <div className="lp_inputs">
                    <LoginForm />
                    <a className="remind_pw" href="#">Забули пароль?</a>
                </div>
            </div>
        )
    }
}

export default LoginPage;




