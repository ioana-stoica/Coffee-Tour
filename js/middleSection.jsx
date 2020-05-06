import React from 'react';
import ReactDOM from 'react-dom';
import MyMap from "./myMap.jsx";
import Details from "./details.jsx";

class MiddleSection extends React.Component {


    render() {
        return (
            <section id="middleSection">
                <MyMap />
                <a href={'#details'}/>
                <Details id={this.props.id} coffeeShop={this.props.coffeeShop}/>
            </section>
        )
    }
}

export default MiddleSection;
