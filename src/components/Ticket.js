import React, { Component } from 'react';
import Brush from './Brush'
import Renderer from './Renderer'

class Ticket extends Component {
    state = {
        isMouseOver: false,
        mouseX: 0,
        mouseY: 0,
        brushX: 0,
        brushY: 0,
        dom: null,
        width: 0,
        height: 0
    }

    componentDidMount = () => {

        if(this.dom){
            this.computeSize();
            window.addEventListener('resize', () => {            
                this.computeSize();
            },false)
        }
    }

    componentDidUpdate = () => {

        
    }

    computeSize = () => {
        const bcr = this.dom.getBoundingClientRect();
        const w = bcr.width;
        const h = bcr.height;

        this.setState({
            width: w,
            height: h
        })
        
    }

    setComponentDom = el => {
        this.dom = el;
    }

    mouseOverHandler = () => {
        if(this.state.isMouseOver) return;
        this.setState({
            isMouseOver: true
        })
    }

    mouseOutHandler = () => {
        if(!this.state.isMouseOver) return;
        this.setState({
            isMouseOver: false
        })
    }

    mouseMoveHandler = e => {
        if(!this.state.isMouseOver) return;
        const x = this.props.rotated ? e.clientY : e.clientX;
        const y = this.props.rotated ? -e.clientX : e.clientY;
        
        this.setState({
            mouseY: y,
            mouseX: x
        })
    }

    render() {
        const classes = this.props.rotated ? 'ticket-wrapper rotated' : 'ticket-wrapper'
        const innerClass = this.props.show ? 'ticket' : 'ticket hide';
        return (
            <div ref={el => this.dom = el} className={classes} onMouseMove={this.mouseMoveHandler} onMouseOver={this.mouseOverHandler} onMouseOut={this.mouseOutHandler}>
                <div className={innerClass}>
                    <div className='ticket-inner'>
                        <Renderer color={this.props.color} size={this.props.weight} toUndo={this.props.toUndo} whenUndo={this.props.whenUndo} toClear={this.props.toClear} whenClear={this.props.whenClear} w={this.state.width} h={this.state.height} />
                        <Brush size={this.props.weight} color={this.props.color} x={this.state.mouseX} y={this.state.mouseY} active={this.state.isMouseOver}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ticket;