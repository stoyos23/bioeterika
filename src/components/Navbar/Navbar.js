import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import About from '../../pages/About';

import Home from '../../pages/Home/index';

import './navbar.css';

function Navbar() {
    return (
        <>
            <Router>
                <div className="nav-menu">
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About</Link>
                </div>
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/about">
                        <About />
                    </Route>
                </Switch>
            </Router>
        </>
    )
}

export default Navbar;