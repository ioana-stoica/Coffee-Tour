import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from "./carousel.jsx";
import CoffeeShopInfo from "./coffeeShopInfo.jsx";

class Details extends React.Component {
    state = {
        display: 'flex'
    };
    componentDidMount() {
        if (this.props.id === '') {
            this.setState({display: 'none'});
        }
    }
    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.setState({display: 'flex'});
        }
    }

    render() {
        return (
            <section id="details" style={{display: this.state.display}}>
                <Carousel id={this.props.id} coffeeShop={this.props.coffeeShop}/>
                <CoffeeShopInfo coffeeShop={this.props.coffeeShop}/>
            </section>
        )
    }
}

export default Details;