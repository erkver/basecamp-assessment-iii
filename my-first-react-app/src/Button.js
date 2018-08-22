import React, { Component } from 'react';

class Button extends Component {
    constructor () {
        super ();
        this.state = {quote: ""}}
    render() {
        return (
            <div>
                <button className = "App-button"
                onClick = {
                    () => this.setState({
                        quote: quotes[Math.floor(Math.random() * quotes.length)]
                        })
                    } > Tommy me! 
                </button>
                {<p> {this.state.quote} </p>}
            </div>
        );
    }
}

const quotes = ["Oh hai, Mark", "Haha, what a story Mark!", "Oh hi, doggie", "You're tearing me apart Lisa!"];

export default Button;