import React, { Component } from 'react';

class ActionSlider extends Component {
    state = {
        value: 0
    }
    componentDidMount(){
        this.setState({
            value: this.props.value
        })
    }
    handleChange = (event) => {
        this.setState({value: event.target.value});
        this.props.onSliderChange(event.target.value)
    }
    render() {
        const sampleStyle = this.props.type === 'weight' ?
            {width: `${this.props.value}px`, height: `${this.props.value}px`} :
            {backgroundColor: `hsl(0, 0%, ${this.props.value}%)`}
        const classes = `sample ${this.props.type}`;
        return (
            <div className='actions-slider'>
                <span className='sample-wrapper'>
                    <span className={classes} style={sampleStyle}></span>
                </span>
                <input type="range" name="volume" min={this.props.min} max={this.props.max} value={this.props.value} onChange={this.handleChange}/>
            </div>
        );
    }
}

export default ActionSlider;
