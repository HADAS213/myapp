import React,{Component} from "react";
import Counter from "./counter";
import Exchange from "./exchange";
// import Gallery from "./gallery";
// import Message from "./message";


export default class AppAll extends Component{
    render(){
        return(
            <div className="container">
                <Exchange/>
                <Counter/>
                {/* <Gallery/> */}
                {/* <Message/> */}
            </div>
        )
    }
}