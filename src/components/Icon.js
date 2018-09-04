import React, { Component } from 'react';

class Icon extends Component {
    render() {
        const fullId = `#icon-${this.props.name}`
        const classes = `icon icon-${this.props.name}`
        return (
                <svg className={classes}>
                    <use xlinkHref={fullId}></use>
                </svg>
        );
    }
}

export default Icon;
