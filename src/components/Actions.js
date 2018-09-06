import React, { Component} from 'react';
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
                    <ActionSlider type='weight' min={3} max={50} value={this.props.weight} onSliderChange={this.props.onWeightChange}/>
                    <ActionSlider type='color' min={0} max={100} value={this.props.color} onSliderChange={this.props.onColorChange}/>
                </div>
            </div>
        );
    }
}

export default Actions;
