import React, { Component } from 'react'

export default class Count extends Component {
    counter = 0;
    state = { counter: 0 };

    // createREf -> מאפשר לי מתוך הריאקט דום לדבר עם אלמנט
    inputRef = React.createRef()


    add1 = () => {
        this.counter++;
        this.setState({ counter: this.state.counter + 1 })
        if (this.counter == 5) {
            this.setState({ counter: this.state.counter = 0 })
            this.counter = 0;
        }

    }

    les1 = () => {
        this.counter--;
        this.setState({ counter: this.state.counter - 1 })
    }


    render() {
        // <div style="backgournd:skyblue">
        // <div style={{background:"skyblue",padding:"8px"}}>
        // style={{ color: this.colors_ar[this.state.counter] }}
        return (
            <div >

                <h2>Counter: {this.state.counter}</h2>
                <button style={{ margin: 5 }} onClick={this.add1}> + </button>
                <button onClick={this.les1}> -</button>
            </div>
        );
    }

}

