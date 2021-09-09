import React, { Component } from 'react';





export default class Card extends Component {
    constructor(props) {
            super(props);
            this.state = {
            }
    }

componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=1')
    .then(response => response.json())
    .then(data => console.log(data))

}


render () {
    return (
        <div> 
        </div>
    )
}
}