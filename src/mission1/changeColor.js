import React, { Component } from 'react'

export default class ChangeColor extends Component {

    state = { color: "silver" };
    inputRef = React.createRef()

    changeColor = () => {
        // current-> כדי לדבר עם האלמנט
        // console.log(this.inputRef.current.value);
        let input_val = this.inputRef.current.value;
        this.setState({ color: input_val });
        // input_val.style={{color:this.state.color}};
    }


    render() {
        return (
            <div>
                <h2>Enter your favorite color: {this.state.color}</h2>
                <input onInput={this.changeColor} ref={this.inputRef} type="text" />
                
            </div>
        );
    }
}