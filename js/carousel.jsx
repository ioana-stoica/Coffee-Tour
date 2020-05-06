import React from 'react';
import ReactDOM from 'react-dom';

class Carousel extends React.Component {
    state = {
      src1: '',
      src2: '',
      src3: '',
      src4: ''
    };

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.setState({
                src1: this.props.coffeeShop.images[0],
                src2: this.props.coffeeShop.images[1],
                src3: this.props.coffeeShop.images[2],
                src4: this.props.coffeeShop.images[3],
            })
        }

    }

    render() {
        return (
            <div id="carouselContainer">
                <h2> {this.props.coffeeShop.name}</h2>
                <div id="slider">
                    <input type="radio" name="slider" id="slide1" defaultChecked={true}/>
                    <input type="radio" name="slider" id="slide2"/>
                    <input type="radio" name="slider" id="slide3"/>
                    <input type="radio" name="slider" id="slide4"/>

                    <div id="slides">
                        <div id="overflow">
                            <div className="inner">

                                <div className="slide slide_1">
                                    <div className="slide-content">
                                            <img src={this.state.src1}/>
                                    </div>
                                </div>

                                <div className="slide slide_2">
                                    <div className="slide-content">
                                        <img src={this.state.src2}/>
                                    </div>
                                </div>

                                <div className="slide slide_3">
                                    <div className="slide-content">
                                        <img src={this.state.src3}/>
                                    </div>
                                </div>

                                <div className="slide slide_4">
                                    <div className="slide-content">
                                        <img src={this.state.src4}/>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div id="controls">
                        <label htmlFor="slide1"></label>
                        <label htmlFor="slide2"></label>
                        <label htmlFor="slide3"></label>
                        <label htmlFor="slide4"></label>
                    </div>
                    <div id="bullets">
                        <label htmlFor="slide1"></label>
                        <label htmlFor="slide2"></label>
                        <label htmlFor="slide3"></label>
                        <label htmlFor="slide4"></label>
                    </div>
                </div>
            </div>
        )
    }
}

export default Carousel;

