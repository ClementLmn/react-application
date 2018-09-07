import React, { Component } from 'react';
class SecondaryButton extends Component {

    
    componentDidMount = () => {
        
    }


    render() {
        return (
            <button onClick={this.props.onClick} title={this.props.text} className='actions-btn-alt' >
                {this.props.text}
            </button>
        );
    }
}

export default SecondaryButton;
