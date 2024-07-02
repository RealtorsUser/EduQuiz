import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import App from './App';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Quiz from './components/Quiz';
import Results from './components/Results';
import './index.css';

ReactDOM.render(
    <Router>
        <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/quiz" component={Quiz} />
            <Route path="/results" component={Results} />
            <Route component={App} />
        </Switch>
    </Router>,
    document.getElementById('root')
);
