import React, { Component } from 'react'
import "./counter.css";

 class Counter extends Component {

    constructor(props){
        super(props);
        console.log(this.props);
        
    }

    increment = () => {
        this.props.increment();
    }

    decrement =() => {
        this.props.decrement();
    }

    render() {
        return (
            <div className="Counter">
                {this.props.number}
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
            </div>
        )
    }
}

export default Counter;
