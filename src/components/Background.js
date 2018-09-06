import React, { Component } from 'react';

class Background extends Component {
    render() {
        const classes = this.props.show ? 'background' : 'background hide';
        return (
            <div className={classes}>
                {/* plus tard on fait un truc animé */}                
            </div>
        );
    }
}

export default Background;