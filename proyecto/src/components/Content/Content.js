import React, {Component}  from "react"
import "./Content.css"

export default class Content extends Component {
    // constructor(props){
    //     super(props)
    //     // this.state={
    //     //     verMas: false,
    //     //     text:'Ver más',
    //     // }
    // }
    
    // verMas(){
    //     if(this.state.verMas){
    //         this.setState({
    //             verMas: false,
    //             text: 'Ver más'
    //         })
    //     } else {
    //         this.setState({
    //             verMas: true,
    //             text: 'Ver menos'
    //         })            
    //     }
    // }

    render(){
      
        return (

            <div className="tarjeta2">
            
             
                <img src={this.props.poster} alt={''} />
                <h1>{this.props.title} </h1>
                <p> {this.props.overview} </p>
                <button onClick={()=> this.props.removerPelicula(this.props.id)}> Eliminar Pelicula </button>
              
            </div>
            
        )
    }
    
  }
  
