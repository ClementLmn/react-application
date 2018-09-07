import React, { Component } from 'react';

class Svgs extends Component {
    render() {
        return (
            <svg style={{position:'absolute', width:0, height:0, overflow:'hidden'}}xmlns='http://www.w3.org/2000/svg'>
                <defs>
                    <symbol id="icon-valid" viewBox="0 0 40 32">
                        <title>valid</title>
                        <path d="M39.667 6.8l-6.6-6.6-18.227 18.227-6.973-6.973-6.6 6.6 13.573 13.573 24.827-24.827z"></path>
                    </symbol>
                    <symbol id="icon-rotate" viewBox="0 0 28 32">
                        <title>rotate</title>
                        <path d="M4.608 18.176c0 5.089 4.127 9.216 9.216 9.216s9.216-4.127 9.216-9.216c0-5.083-4.116-9.205-9.198-9.215v4.863l-6.912-6.913 6.912-6.912v4.354c7.625 0.010 13.806 6.194 13.806 13.822-0 7.634-6.19 13.824-13.824 13.824s-13.824-6.19-13.824-13.824h4.608z"></path>
                    </symbol>
                    <symbol id="icon-arrow" viewBox="0 0 40 32">
                        <title>arrow</title>
                        <path d="M24.243 0.383l-3.757 3.757 9.461 9.391h-29.565v5.287h29.565l-9.461 9.391 3.757 3.757 15.722-15.791-15.722-15.791z"></path>
                    </symbol>
                    <symbol id="icon-clear" viewBox="0 0 32 32">
                        <title>clear</title>
                        <path d="M4.718 0.283l11.118 11.118 11.118-11.118 4.665 4.665-11.118 11.118 11.134 11.134-4.665 4.665-11.134-11.134-11.134 11.134-4.665-4.665 11.134-11.134-11.118-11.118 4.665-4.665z"></path>
                    </symbol>
                </defs>
            </svg>
        );
    }
}

export default Svgs;

