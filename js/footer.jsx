import React from 'react';
import ReactDOM from 'react-dom';
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Footer extends React.Component {
    render() {
        return (
            <footer>
             <div>
                 <p> <Link to="/">&copy; 2020 Bucharest Coffee Tour</Link> </p>
                 <p> About us </p>
                 <p> <Link to="/contact"> Contact </Link> </p>
                 <p> <Link to="/Admin"> Admin </Link> </p>
             </div>
            </footer>
        )
    }
}

export default Footer;
