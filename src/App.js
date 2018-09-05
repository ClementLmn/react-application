import React, { Component } from 'react';
import Background from './components/Background'
import Ticket from './components/Ticket';
import Actions from './components/Actions';
import Svgs from './components/Svgs';

class App extends Component {
    state = {
        isTicketUndo: false,
        isTicketClear: false,
        brushWeight: 10
    }
    undoTicket = () => {
        this.setState({
            isTicketUndo: !this.state.isTicketUndo
        })
    }
    onWeightChange = w => {
        this.setState({
            brushWeight: w
        })
    }
    clearTicket = () => {
        this.setState({
            isTicketClear: !this.state.isTicketClear
        })
    }
    render() {
        return (
            <div className="App">
                <Background />
                <Ticket weight={this.state.brushWeight} whenUndo={this.undoTicket} toUndo={this.state.isTicketUndo} whenClear={this.clearTicket} toClear={this.state.isTicketClear}/>
                <Actions weight={this.state.brushWeight} onSliderChange={this.onWeightChange} undoTicket={this.undoTicket} clearTicket={this.clearTicket}/> 
                <Svgs />
            </div>
        );
    }
}

export default App;
