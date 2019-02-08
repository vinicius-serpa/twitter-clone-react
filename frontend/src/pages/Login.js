import React, { Component } from 'react';

import twitterLogo from '../twitter.svg';
import './Login.css';

export default class Login extends Component {
    
    state = {
        username: '',
    };

    handleInputChange = (e) => {
        this.setState({ username: e.target.value });
    };

    handleSubmit = (e) => {
        
        e.preventDefault(); // break the form or button submit
        const { username } = this.state;
        
        if (!username.length) return;

        localStorage.setItem('@GoTweeter:username', username); // insert data on local storage (cab be show with browser)
        this.props.history.push('/timeline'); // redirect to timeline
    };

    render() {
        return (
            <div className='login-wrapper'>
                <img src={twitterLogo} alt="GoTwitter" />
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.username} onChange={this.handleInputChange} placeholder="Nome de usuário"/>
                    <button type="submit">Entrar</button>
                </form>
            </div>
        );
    };
}