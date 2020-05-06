import React from 'react';
import ReactDOM from 'react-dom';

import Header from './header.jsx';
import MainComponent from "./main-component.jsx";
import Footer from "./footer.jsx";

    class Main extends React.Component {
        render() {
            return (
                <>
                <Header />
                <MainComponent />
                <Footer />
                </>
                )
        }
    }


export default Main;







