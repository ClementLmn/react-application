import React, { Component } from 'react';
import ActionButton from './ActionButton';

class Actions extends Component {
    rotateTicket = (e) => {
        this.props.rotateTicket();
    }
    render() {
        return (
            <div className='actions'>
                <ActionButton onClick={this.rotateTicket} text='Rotate' icon='rotate' />
                <ActionButton text='Send' icon='valid' big/>
                <ActionButton text='Clear' icon='clear'/>
            </div>
        );
    }
}

export default Actions;
