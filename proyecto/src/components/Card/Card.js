import React, { Component } from 'react';
import Content from '../Content/Content';
import cargando from '../Loader/cargando.gif';


export default class Card extends Component {
    constructor(props) {
            super(props);
            this.state = {
                contenido:  []
            }
    }

componentDidMount() {
    fetch('')
    .then(response => response.json())
    .then(data => { 
        
        this.setState({
            contenido: data.results
        })
   })
   .catch ( error => console.log(error));

}

render () {
    console.log('Renderizandoooooo')
    console.log(this.state.contenido);
    return (
        <div> 
            {this.state.contenido.length === 0  ?
            
            <img src={cargando} alt=''/> :

            this.state.contenido.map( (popular,index) => {
              return <Content key = {index} title = {popular.title} ></Content>
           
          } 
          ) }  
        </div>
    )
}
}