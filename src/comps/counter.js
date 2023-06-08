import React,{Component} from "react";

export default class Counter extends Component{
    divStyle = {
        background:"yellow",
        padding:"16px"
    }
    counter=44;
    state={counter:0,user:"hadas"};
    colors_ar=["red","blue","green","brown"]

    add1=()=>{
       this.counter++;
        this.setState({counter:this.state.counter+1})
        if(this.state.counter+1>=40){
            this.setState({user:"yedid"});
        }
    }

    render() {
        // <div style="backgournd:skyblue">
        // <div style={{background:"skyblue",padding:"8px"}}>
        return (
          <div style={{color:this.colors_ar[this.state.counter]}}>
            <h2>Counter: {this.state.counter}</h2>
            <button onClick={this.add1}>Add 1 {this.state.user}</button>
          </div>
        );
    }
}