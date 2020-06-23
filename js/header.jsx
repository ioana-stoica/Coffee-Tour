import React from 'react';
import ReactDOM from 'react-dom';
import {Link} from "react-router-dom";


    class Header extends React.Component {
        render() {
            return (
                <header>
                    <div id="headerContainer">
                        <h1> <Link to="/"> Bucharest Coffee Tour </Link></h1>
                        <div id="logo">
                            <img src={'img/vintage-logo.jpg'} alt={'logo'}/>
                        </div>
                    </div>

                </header>
            )
        }
    }

    export default Header;




