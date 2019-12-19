import React, { Component } from 'react'
import './login-page.css'

class LoginUser extends Component {
    constructor(props) {
        super(props)
        this.state = {
            password : ''
        }
    }
    handlePasswordChange = (e) => {
        this.setState({
            password : e.target.value
        })
    }
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
                    <form onSubmit={e => this.props.handleLogin(e, {
                        username : this.props.username,
                        password : this.state.password
                    })} >
                        <div>
                            <label htmlFor="username" >Username</label>
                            <input type="text"
                                   onChange={this.props.handleLoginChange}
                                   value={this.props.username}
                                   name="username"
                                   id="username"
                                   placeholder="Username" />
                        </div>
                        <div>
                            <label htmlFor="password" >Password</label>
                            <input type="password"
                                   onChange={this.handlePasswordChange}
                                   value={this.state.password}
                                   name="password"
                                   id="password"
                                   placeholder="Password" />
                        </div>
                        <button type='submit'>Login</button>
                    </form>
                    <a className="remind_pw" href="#">Забули пароль?</a>
                </div>
            </div>
        )
    }
}

export default LoginUser