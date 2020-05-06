import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from "./navigation.jsx";
import Content from "./content.jsx";

class MainComponent extends React.Component {
    render() {
        return (
            <div id= 'mainContainer'>
                <Navigation />
                <Content />
            </div>
        )
    }
}

export default MainComponent;