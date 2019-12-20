import React, { Component } from 'react';
import HeadBar from './components/head-bar'
import SideBar from "./components/side-bar";
import StudentList from "./components/student-list";
import SchedulePage from "./components/schedule-page";
import NewsPage from "./components/news-page";
import StudentService from "./services/student-service";
import LoginUser from "./components/login-page/login-user";
import { BrowserRouter as Router, Route} from 'react-router-dom';

const base_url = 'http://127.0.0.1:8000/';
class App extends Component {
    studentService = new StudentService();
    constructor(props) {
        super(props)

        this.state = {
            logged_in : localStorage.getItem('token') ? true : false,
            username : '',
            displayed_form : ''
        }
    }

    componentDidMount(){
        if(this.state.logged_in){
            this.studentService
                .getCurrentUser()
                .then(res => res.json())
                .then(resp => {
                    this.setState({ username : resp.username })
                })
                .catch(err => console.log(err));
        }
    }

    display_form = (formName) => {
        this.setState({
            displayed_form : formName
        });
    };

    handleLoginChange = event => {
        this.setState({
            [event.target.name] : event.target.value
        })
    };

    handleLogout = () => {
        localStorage.removeItem('token');
        this.setState({logged_in : false, username : ''})
    };
    handleLogin = (e, data) => {
        e.preventDefault();
        console.log(data);
        fetch(base_url + 'token-auth/', {
            method : 'POST',
            headers: {
                'Authorization':'JWT ' + localStorage.getItem('token'),
                'Content-Type': 'application/json',
            },

            body : JSON.stringify(data),
        })
            .then(response => response.json())
            .then(json => {
                localStorage.setItem('token', json.token);
                this.setState({
                    logged_in : true,
                    username : json.user.username
                })
            })
            .catch(error => {
                console.log(error)
            });
        this.setState({
            displayed_form : '' 
        })
    };
    render() {
        const { logged_in, username, displayed_form } = this.state;

        return (
            <div className="App">
                {this.state.logged_in
                    ?<Router>
                        <HeadBar
                            handleLogout={this.handleLogout}
                        />
                        <SideBar />
                        <Route path="/students" component={StudentList}/>
                        <Route path="/news" component={NewsPage}/>
                        <Route path="/schedule" component={SchedulePage}/>
                    </Router> : <LoginUser
                        logged_in={logged_in}
                        handleLogin={this.handleLogin}
                        handleLoginChange={this.handleLoginChange}
                        handleLogout={this.handleLogout}
                        username={username}
                        displayed_form={displayed_form}
                        display_form={this.display_form}
                    />}
            </div>
        );
    }

}

export default App;
