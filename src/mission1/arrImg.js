import React, { Component } from 'react'

export default class ArrImg extends Component {

    state = { counter: 0 };
    pic = "/images/";
    arr = [this.pic + "pic1.jpeg", this.pic + "pic2.jpeg", this.pic + "pic3.jpeg", this.pic + "pic4.jpeg"];
    picture=this.arr[0];


    next = () => {
        this.counter++;
        this.setState({ counter: this.state.counter + 1 })
        if (this.counter == 5) {
            this.setState({ counter: this.state.counter = 0 })
            this.counter = 0;
        }   
        this.picture=this.arr[this.state.counter];
    }

    back = () => {
        this.counter--;
        this.setState({ counter: this.state.counter - 1 })
        if (this.counter == -1) {
            this.setState({ counter: this.state.counter = 4 })
            this.counter = 4;
        }
        this.picture=this.arr[this.state.counter];
    }

    render() {
           return (
            <div >
                <img src={this.picture} style={{ width: 100 }} />
                <br />
                <button style={{ marginRight: 50 }} onClick={this.back}> back </button>
                <button onClick={this.next}> next </button>
            </div>
        );

    }
}