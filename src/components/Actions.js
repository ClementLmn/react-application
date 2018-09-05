import React, { Component, Fragment } from 'react';
import ActionButton from './ActionButton';
import ActionSlider from './ActionSlider';

class Actions extends Component {
    undoTicket = (e) => {
        this.props.undoTicket();
    }
    clearTicket = (e) => {
        this.props.clearTicket();
    }
    render() {
        return (
            <div className='actions'>
                <div className='actions-bottom'>
                    <ActionButton onClick={this.undoTicket} text='Undo' icon='rotate' />
                    <ActionButton text='Send' icon='valid' big/>
                    <ActionButton onClick={this.clearTicket} text='Clear' icon='clear'/>
                </div>
                <div className='actions-right'>
                    <ActionSlider weight={this.props.weight} onSliderChange={this.props.onSliderChange}/>
                </div>
            </div>
        );
    }
}

export default Actions;
