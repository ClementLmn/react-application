import React, { Component } from 'react';
import Icon from './Icon';

class ActionSlider extends Component {
    state = {
        value: 10
    }
    componentDidMount(){
        this.setState({
            value: this.props.weight
        })
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onSliderChange(event.target.value)
    }
    render() {
        const sampleStyle = {width: `${this.state.value}px`, height: `${this.state.value}px`}
        return (
            <div className='actions-slider'>
                <span className='sample-wrapper'>
                    <span className='sample' style={sampleStyle}></span>
                </span>
                <input type="range" name="volume" min="3" max="30" value={this.state.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default ActionSlider;
