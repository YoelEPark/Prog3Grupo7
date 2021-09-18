import React, {Component}  from "react"
import "./FiltroDePeliculas.css"

export default class FiltroDePeliculas extends Component {
    constructor(){
        super();
         this.state= {
             valorInput:""
             
     }
  }

 
  capturaInput(evento){
            this.setState({
                valorInput:  evento.target.value
            }, ()=> this.props.filtroPorTitulo(this.state.valorInput) )
  }



  render() {
     return(
            <form  >
                <label> Buscar Película: </label>
                <input onChange={(evento)=>{this.capturaInput(evento)}}  type="text" />    
 
            </form>

     )


  }
  }

  