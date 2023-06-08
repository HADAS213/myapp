import React, {Component} from "react";
import ArrImg from './arrImg';
import ChangeColor from './changeColor';
import Count from './count';
import Message from './message';

export default class AppHw extends Component{
    render(){
        return(
            <div >
                <Message msg="first 1" />
                <Message msg="second 2"/>
                {/* <hr/> */}
                <h2>hi</h2>
                <ChangeColor/>
                <hr/>
                <Count/>
                <hr/>
                <ArrImg/>
            </div>
        )
    }
}