import React, { Component } from 'react';
import Icon from './Icon'

class ActionInputUrl extends Component {
    state = {
        value: ''
    }
    
    componentDidMount = () => {
        
    }
    
    handleChange = e => {
        this.setState({
            value: e.target.value
        })
    }

    submitUrl = () => {
        if(this.state.value === '') return;
        this.props.sendData(this.state.value);
    }



    render() {
        const btnClass = this.state.value === '' ? '' : 'on';
        return (
            <div className='actions-url-wrapper'>
                <input onChange={this.handleChange} className='actions-url' placeholder={this.props.text} />
                <button onClick={this.submitUrl} className={btnClass}>
                    <Icon name='arrow'/>
                </button>
            </div>
        );
    }
}

export default ActionInputUrl;