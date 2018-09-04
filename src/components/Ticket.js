import React, { Component } from 'react';

class Ticket extends Component {
    render() {
        const classes = this.props.rotated ? 'ticket-wrapper rotated' : 'ticket-wrapper'
        return (
            <div className={classes}>
                <div className="ticket">
                    <div className='ticket-inner'>
                        <canvas className='ticket-canvas'></canvas>
                    </div>
                </div>
            </div>
        );
    }
}

export default Ticket;