import React from 'react';
import ReactDOM from 'react-dom';
import Main from './main.jsx';
import Contact from "./contact.jsx";
import Admin from "./admin.jsx";
import NotFound from "./notFound.jsx";
import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';


document.addEventListener('DOMContentLoaded', function () {

    class App extends React.Component {
        render() {
            return <HashRouter>
                <Switch>
                        <Route exact path='/' component={Main} />
                        <Route path='/contact' component={Contact} />
                        <Route path='/admin' component={Admin} />
                        <Route component={NotFound} />
                </Switch>
            </HashRouter>;
        }
    }

    ReactDOM.render(
        <App />,
        document.getElementById('app')
    )


});