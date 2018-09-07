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
        colorL: 80,
        showBackground: false,
        showTicket: false,
        showButtons: false,
        imageUrl: '',
        toAddImg: false
    }
    undoTicket = () => {
        this.setState({
            isTicketUndo: !this.state.isTicketUndo
        })
    }
    whenAddImg = () => {
        this.setState({
            toAddImg: false
        })
    }
    getDataFromUrl = (data) => {
        this.setState({
            imageUrl: data,
            toAddImg: true
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
                brushWeight: this.state.brushWeight,
                colorL: this.state.colorL
            }
            TweenLite.to(obj, 0.8, {brushWeight: 20, onUpdate:function(el){
                this.setState({
                    brushWeight: el.target.brushWeight
                })
            }, onUpdateParams:["{self}"], onUpdateScope: this});
            TweenLite.to(obj, 0.8, {colorL: 10, onUpdate:function(el){
                this.setState({
                    colorL: el.target.colorL,
                    color: `hsl(0, 0%, ${el.target.colorL}%)`,
                })
            }, onUpdateParams:["{self}"], onUpdateScope: this, delay: 0.2});
        }, [], this, 2.4)
    }
    render() {
        return (
            <div className="App">
                <Background show={this.state.showBackground}/>
                <Ticket imageUrl={this.state.imageUrl} toAddImg={this.state.toAddImg} whenAddImg={this.whenAddImg}  show={this.state.showTicket} color={this.state.color} weight={this.state.brushWeight} whenUndo={this.undoTicket} toUndo={this.state.isTicketUndo} whenClear={this.clearTicket} toClear={this.state.isTicketClear}/>
                <Actions getDataFromUrl={this.getDataFromUrl} show={this.state.showButtons} color={this.state.colorL} onColorChange={this.onColorChange} weight={this.state.brushWeight} onWeightChange={this.onWeightChange} undoTicket={this.undoTicket} clearTicket={this.clearTicket}/> 
                <Svgs />
            </div>
        );
    }
}

export default App;
