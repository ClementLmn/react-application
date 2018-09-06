import React, { Component } from 'react';
import Background from './components/Background'
import Ticket from './components/Ticket';
import Actions from './components/Actions';
import Svgs from './components/Svgs';

class App extends Component {
    state = {
        isTicketUndo: false,
        isTicketClear: false,
        brushWeight: 30,
        color: 'hsl(0, 0%, 25%)',
        colorL: 25
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
    onColorChange = c => {
        console.log(c);
        
        this.setState({
            color: `hsl(0, 0%, ${c}%)`,
            colorL: c,
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
                <Ticket color={this.state.color} weight={this.state.brushWeight} whenUndo={this.undoTicket} toUndo={this.state.isTicketUndo} whenClear={this.clearTicket} toClear={this.state.isTicketClear}/>
                <Actions color={this.state.colorL} onColorChange={this.onColorChange} weight={this.state.brushWeight} onWeightChange={this.onWeightChange} undoTicket={this.undoTicket} clearTicket={this.clearTicket}/> 
                <Svgs />
            </div>
        );
    }
}

export default App;
