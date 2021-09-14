import React, {Component}  from "react"
import "./Content.css"

export default class Content extends Component {
     constructor(props){
         super(props)
          this.state={
              clase: "hide",
              
      }
   }
    
 verMas(){
         if(this.state.clase === "hide"){
             this.setState({
                 clase: "show"
             })
         } else {
             this.setState({
                 clase: "hide",
                
             })            
         }
     }

    render(){
      
        return (

            <div className="hijo">
             
                <img src={this.props.poster} alt={''} />
                <h1>{this.props.title} </h1>
                <p> {this.props.overview} </p>
                <button onClick={()=> this.props.removerPelicula(this.props.id)}> Eliminar Pelicula </button>
                <button className="infor" onClick= {() => this.verMas()}>Ver más</button>
                <p className= {this.state.clase}> Fecha de salida: {this.props.salida} </p>
                <p className= {this.state.clase}> Calificación media de la audiencia: {this.props.vote} </p>
                <p className= {this.state.clase}> Idioma original: {this.props.idioma} </p>
               
              </div>
       
            
        )
    }
    
  }
  
