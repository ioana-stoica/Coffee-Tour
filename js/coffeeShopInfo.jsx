import React from 'react';
import ReactDOM from 'react-dom';

class CoffeeShopInfo extends React.Component {
    render() {
        return (
            <article id="coffeeshop-info">
                <h3> Description </h3>
                <p> {this.props.coffeeShop.description} </p>
            </article>
        )
    }
}

export default CoffeeShopInfo;