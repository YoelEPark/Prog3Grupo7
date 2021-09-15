import React, {Component}  from "react"

export default class FiltroDePeliculas extends Component {
    constructor(){
        super();
         this.state= {
             valorInput:""
             
     }
  }

  prevenirRefresh(evento){
      console.log("Refresh evitado con exito")
      evento.prevenirDefault();
  }

  capturaInput(evento){
            this.setState({
                valorInput:  evento.target.value
            }, ()=> this.props.filtroPorTitulo(this.state.valorInput) )
  }



  render() {
     return(
            <form onSubmit={(evento) =>  this.prevenirRefresh(evento)}>
                <label>  Search:       </label>
                <input onChange={(evento)=>{this.capturaInput(evento)}}  type="text" />    

            </form>

     )


  }
  }

  