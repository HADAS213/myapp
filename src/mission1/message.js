import React, { Component } from "react";


export default class Message extends Component {
    render() {
        return (
            <div className="p-2" style={{ background: "green", border: '2px solid blue' }}>
                <h2>Message: {this.props.msg}</h2>
            </div>
        )
    }
}