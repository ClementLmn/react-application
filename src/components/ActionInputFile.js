
import React, { Component } from 'react';
import SecondaryButton from './SecondaryButton'

class ActionInputFile extends Component {

    state= {
        url: ''
    }   

    inputClick = () => {
        const clickEvent = new MouseEvent('click', {
            view: window,
            bubbles: true,
            cancelable: true
        });
        this.inputFile.dispatchEvent(clickEvent);
    }

    sendFile = d => {
        this.setState({
            url: d
        })
        this.props.sendData(this.state.url);
    }

    handleChange = e => {
		var i = 0;
		for (i; i < this.inputFile.files.length; i++) {
			var file = this.inputFile.files[i], 
				reader = new FileReader();

			reader.onloadend = () => {
                this.sendFile(reader.result)
			}
			reader.readAsDataURL(file);
		}
    }


    render() {
        return (
            <div>
                <SecondaryButton onClick={this.inputClick} text={this.props.text} />
                <input onChange={this.handleChange} ref={i => this.inputFile = i} className='actions-file' type='file' accept='image/*' />
            </div>
        );
    }
}

export default ActionInputFile;
