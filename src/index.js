import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { HashRouter as Router, Route } from "./react-router-dom";
import Home from './Home';
import Profile from './Profile';
import User from './User';
import * as serviceWorker from './serviceWorker';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Route path='/home' component={Home}></Route>
                    <Route path='/profile' component={Profile}></Route>
                    <Route path='/user' component={User}></Route>
                    <Home />
                </div>
            </Router>
        )
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
