import React, { Component } from 'react';
import cargando from '../Loader/cargando.gif';
import Content from '../Content/Content';
import "./Card.css"
import FiltroDePeliculas from '../FiltroDePeliculas/FiltroDePeliculas';
class Card extends Component {
    constructor(props) {
            super(props);
            this.state = {
                peliculas: [],
                pagina: 1,
                peliculasOriginales: [], 
                display: props.display,
                orientacion: "row"
            }
    }

componentDidMount() { 
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US`)
    .then(response => response.json())
    .then(data => { 
        
        this.setState({
            peliculas: data.results, 
            peliculasOriginales: data.results,
            pagina: this.state.pagina + 1
        })
    })
   .catch ( error => console.log(error));

}

 removerPelicula(id){
     let buenas = this.state.peliculas.filter(pelicula => pelicula.id !==id)
     this.setState({
         peliculas: buenas, 
         peliculasOriginales: buenas,
     })
 }


    addTarjetas(){
     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=${this.state.pagina}`)
     .then( response => response.json())
     .then( data  => {
         this.setState({
         peliculas: this.state.peliculas.concat(data.results),
         pagina: this.state.pagina + 1 
     })})
     .catch( error => console.log(error));
    }

 filtrarPorTitulo(tituloAFiltrar){
        console.log(tituloAFiltrar);
        const arrayFiltrado = this.state.peliculasOriginales.filter( elemento => {
                  return  elemento.title.toLowerCase().includes(tituloAFiltrar.toLowerCase())
        })
           
                this.setState({
                    peliculas: arrayFiltrado 
                 })
          
     
 }
      
            cambiarOrientacion(){
                if (this.state.orientacion === "row"){
                    this.setState({
                        orientacion: "column" })
                } else {
                    this.setState({
                        orientacion: "row"
                    })
                }
               
               
            }
            

 

render () {
    console.log('Renderizandoooooo')
    console.log(this.state.peliculas);
    return (
        <div className={`flex-${this.state.orientacion}`}  > 
        <div>
                <FiltroDePeliculas filtroPorTitulo={(titulo)=> this.filtrarPorTitulo(titulo)} />
             <button className="botones" onClick={()=>this.addTarjetas()}> Agregar m??s peliculas </button>
             <button className="botones" onClick={()=>this.cambiarOrientacion()}> Cambiar orientaci??n </button>
             </div>
            {this.state.peliculasOriginales.length === 0  ?
            
            <img className="loading"src={cargando} alt=''/> : 
            
             this.state.peliculas.length === 0 ?
                <h1 className="noExiste">No hay datos que coincidan con su b??squeda</h1> : 

             this.state.peliculas.map( (popular,index) => {
                return <Content key = {index}
                id = {popular.id}
                 title = {popular.title}
                 poster = {`https://image.tmdb.org/t/p/w342/${popular.poster_path}`}
                 overview  = {popular.overview} 
                 salida = {popular.release_date}
                 idioma = {popular.original_language}
                 vote = {popular.vote_average}
                 orientacion={this.state.orientacion}
                 removerPelicula = {(id)=>this.removerPelicula(id)}
             
                 
                 
                 />
                 
          }
           
          ) 
        }
          
        </div>
    )
}
}

export default Card;