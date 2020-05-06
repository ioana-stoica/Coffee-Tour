import React from 'react';
import ReactDOM from 'react-dom';

class Filter extends React.Component {

    render() {
        return (
            <aside id='asideRight'>

                <div id="button1"  className="buttons">
                    <label >
                        <input type="checkbox" value="1"/><span onClick={this.props.handleButton1}>Has roastery</span>
                    </label>
                </div>
                <div id="button2"  className="buttons">
                    <label>
                        <input type="checkbox" value="2"/><span onClick={this.props.handleButton2}>Serves food</span>
                    </label>
                </div>
                <div id="button3" className="buttons">
                    <label>
                        <input type="checkbox" value="3"/><span onClick={this.props.handleButton3}>Pet friendly</span>
                    </label>
                </div>


            </aside>
        )
    }
}

export default Filter;