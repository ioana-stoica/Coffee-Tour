import React from 'react';
import ReactDOM from 'react-dom';
import Header from "./header.jsx";
import Footer from "./footer.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class AdminLogin extends React.Component {
    state = {
        username: '',
        password: ''
    };

    handleChange = event => {
        this.setState({
            [event.target.name]: event.target.value
        })
    };

    render() {
        return (
            <>
                <form className={'loginForm'} onSubmit={this.handleSubmit}>
                    <input type={'text'} name={'username'} placeholder={'Your username'} onChange={this.handleChange}/>
                    <input type={'password'} name={'password'} placeholder={'Your password'} onChange={this.handleChange}/>
                    <input type={'submit'} value={'Login'}/>
                </form>
            </>
        )
    }
}

class Admin extends React.Component {
    render() {
        return (
            <>
                <Header />
                <h2> Welcome to your administrator page </h2>
                <AdminLogin/>
                <Footer />
            </>
        )
    }
}

export default Admin;