import React, { Component } from 'react';

export default class Content extends Component {
    constructor(props){
        super(props)
    }

render() {
    return (
        <div>
            <h4> {this.props.title} </h4>
        </div>
    )
}

}