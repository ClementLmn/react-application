import React, { Component } from 'react';
import {SketchField, Tools} from 'react-sketch';

class Renderer extends Component {

    state = {
        canUndo: false,
    }
    componentDidMount = () => {
        window.fabric.objectCaching = false;
        this.sketch._canvas.imageSmoothingEnabled = false
        this.ctx = this.sketch._canvas.getContext('2d');
        this.ctx.globalCompositeOperation = 'luminosity'
    }
    onSketchChange = () => {
        let prev = this.state.canUndo;
        let now = this.sketch.canUndo();
        if (prev !== now) {
            this.setState({canUndo: now});
        }
    }


    clearSketch = () => {
        this.sketch.clear();
        this.sketch.setBackgroundFromDataUrl('');
    }

    undoSketch = () => {
        if(!this.state.canUndo) return;

        this.sketch.undo();

        this.setState({
            canUndo: this.sketch.canUndo(),
        })
    }

    componentDidUpdate(){
        if(this.props.toClear) {
            this.clearSketch();
            this.props.whenClear();
        }

        if(this.props.toUndo) {
            this.undoSketch();
            this.props.whenUndo();
        }

        if(this.props.toAddImg) {
            this.addImg();
            this.props.whenAddImg();
        }

    }

    addImg = () => {
        if(this.props.imageUrl !== '') {
            this.sketch.addImg(this.props.imageUrl);
        }
    }
    
    render() {
        return (
            <SketchField className='renderer' ref={c => this.sketch = c}
                         width={this.props.w - 40}
                         height={this.props.h - 40}
                         tool={Tools.Pencil} 
                         lineColor={this.props.color}
                         onChange={this.onSketchChange}
                         lineWidth={this.props.size}
                         forceValue={true}
                         name='sketch'/>
        );
    }
}

export default Renderer;

