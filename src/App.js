import React, { Component } from 'react';
import Background from './components/Background'
import Ticket from './components/Ticket';
import Actions from './components/Actions';
import Svgs from './components/Svgs';

class App extends Component {
    state = {
        isTicketRotate: false
    }
    rotateTicket = () => {
        this.setState({
            isTicketRotate: !this.state.isTicketRotate
        })
    }
    render() {
        return (
            <div className="App">
                <Background />
                <Ticket rotated={this.state.isTicketRotate}/>
                <Actions rotateTicket={this.rotateTicket}/>
                <Svgs />
            </div>
        );
    }
}

export default App;
