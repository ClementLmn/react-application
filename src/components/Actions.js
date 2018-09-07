import React, { Component} from 'react';
import ActionButton from './ActionButton';
import ActionSlider from './ActionSlider';
import SecondaryButton from './SecondaryButton';
import ActionInputUrl from './ActionInputUrl';
import ActionInputFile from './ActionInputFile';

class Actions extends Component {
    undoTicket = (e) => {
        this.props.undoTicket();
    }
    clearTicket = (e) => {
        this.props.clearTicket();
    }
    sendTicket = () => {

        fetch('http://localhost:3333/send', {
            method: 'POST',
            body: JSON.stringify({
                msg: 'allo'
            }),
            mode: 'no-cors',
            headers: {"Content-Type": "application/json"}
          })
          .then(function(response){
              console.log(response);
              
            return response.json();
          }).then(function(body){
            console.log(body);
          });
    }
    render() {
        const classes = this.props.show ? 'actions' : 'actions hide';
        return (
            <div className={classes}>
                <div className='actions-bottom'>
                    <ActionButton pos='left' onClick={this.undoTicket} text='Undo' icon='rotate' />
                    <ActionButton text='Send' onClick={this.sendTicket} icon='valid' big/>
                    <ActionButton pos='right' onClick={this.clearTicket} text='Clear' icon='clear'/>
                </div>
                <div className='actions-right'>
                    <h2 className='align-center'>Brush options</h2>
                    <div className='actions-right-inner'>
                        <ActionSlider type='weight' min={3} max={50} value={this.props.weight} onSliderChange={this.props.onWeightChange}/>
                        <ActionSlider type='color' min={0} max={100} value={this.props.color} onSliderChange={this.props.onColorChange}/>
                    </div>
                </div>
                <div className='actions-left'>
                    <h2>Insert image</h2>
                    <div className='actions-left-inner'>
                        <SecondaryButton text='Take a picture' />
                        <ActionInputFile sendData={this.props.getDataFromUrl} text='Import from file' />
                        <ActionInputUrl sendData={this.props.getDataFromUrl} text='Import from URL' />
                    </div>
                </div>
            </div>
        );
    }
}

export default Actions;
