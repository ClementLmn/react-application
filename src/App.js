import React, { Component } from 'react';
import Background from './components/Background'
import Ticket from './components/Ticket';
import Actions from './components/Actions';
import Svgs from './components/Svgs';
import {TimelineLite, TweenLite} from 'gsap';

class App extends Component {
    state = {
        isTicketUndo: false,
        isTicketClear: false,
        brushWeight: 50,
        color: 'hsl(0, 0%, 25%)',
        colorL: 0,
        showBackground: false,
        showTicket: false,
        showButtons: false,
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
    componentDidMount = () => {
        const tl = new TimelineLite();

        tl.call(function(){
            this.setState({
                showTicket: true
            });
        }, [], this, 0.5)
        .call(function(){
            this.setState({
                showBackground: true
            });
        }, [], this, 1)
        .call(function(){
            this.setState({
                showButtons: true
            });
        }, [], this, 1.8)
        .call(function(){
            const obj = {
                brushWeight: this.state.brushWeight
            }
            TweenLite.to(obj, 1, {brushWeight: 30, onUpdate:function(el){
                this.setState({
                    brushWeight: el.target.brushWeight
                })
            }, onUpdateParams:["{self}"], onUpdateScope: this});
        }, [], this, 2.8)
    }
    render() {
        return (
            <div className="App">
                <Background show={this.state.showBackground}/>
                <Ticket show={this.state.showTicket} color={this.state.color} weight={this.state.brushWeight} whenUndo={this.undoTicket} toUndo={this.state.isTicketUndo} whenClear={this.clearTicket} toClear={this.state.isTicketClear}/>
                <Actions show={this.state.showButtons} color={this.state.colorL} onColorChange={this.onColorChange} weight={this.state.brushWeight} onWeightChange={this.onWeightChange} undoTicket={this.undoTicket} clearTicket={this.clearTicket}/> 
                <Svgs />
            </div>
        );
    }
}

export default App;
