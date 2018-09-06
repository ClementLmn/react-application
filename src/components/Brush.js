import React, { Component } from 'react';

class Brush extends Component {
    render() {

        const classes = this.props.active ? 'brush on' : 'brush';
        const styles = {
            width: `${this.props.size}px`, 
            height: `${this.props.size}px`,
            borderColor: this.props.color,
            transform: `translate3d(${this.props.x - this.props.size/2}px, ${this.props.y - this.props.size/2}px, 0)` 
        }
        
        return (
            <div className={classes} style={styles}></div>
        );
    }
}

export default Brush;

