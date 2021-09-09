import React, { Component } from 'react';
import Content from '../Content/Content';





export default class Card extends Component {
    constructor(props) {
            super(props);
            this.state = {
                pelisPopulares:  []
            }
    }

componentDidMount() {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=1')
    .then(response => response.json())
    .then(data => 
        
        this.setState({
            pelisPopulares: data.results
        })
        )
        .catch( error => console.log(error));
}


render () {
    return (
        <div> 
          { this.state.pelisPopulares.map( content => {
              return 
           
          } ) }  
        </div>
    )
}
}