import React, { Component } from 'react';
import Icon from './Icon';

class ActionButton extends Component {
    componentDidMount(){
        this.setState((prevState, props) => {
            return {
                icon: true
            };
        });
    }

    state = { 
        icon: true
    };

    render() {
        const classes = this.props.big ? 'actions-btn big' : 'actions-btn';
        return (
            <button onClick={this.props.onClick} title={this.props.text} className={classes} >
                {this.state.icon &&
                    <Icon name={this.props.icon} />
                }
            </button>
        );
    }
}

export default ActionButton;
