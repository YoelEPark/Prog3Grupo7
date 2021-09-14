import React, { Component } from 'react';
import cargando from '../Loader/cargando.gif';
import Content from '../Content/Content';
import "./Card.css"

export default class Card extends Component {
    constructor(props) {
            super(props);
            this.state = {
                peliculas: [],
                pagina: 1,
                peliculasOriginales: [],
                peliculasBorradas:[],
                cargando: false,
                display: props.display
            }
    }

componentDidMount() {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=${this.state.pagina}`)
    .then(response => response.json())
    .then(data => { 
        
        this.setState({
            peliculas: data.results,
            cargando: true,
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
         peliculasBorradas: this.state.peliculasBorradas.concat(id)
     })
 }


// verMas(){
//     fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d72b8119ca0d802447ebd91bded10750&language=en-US&page=${this.state.pagina}`)
//     .then( response => response.json())
//     .then( data  => {
//         this.setState({
//         cargando: true,
//         peliculas: this.state.peliculas.concat(data.results),
//         pagina: this.state.pagina + 1
//     })})
//     .catch( error => console.log(error));
//    }


 

render () {
    console.log('Renderizandoooooo')
    console.log(this.state.peliculas);
    return (
        <div className="flex"   style={{ display:'flex', flexWrap: "wrap", justifyContent: "center"  }}> 
            {this.state.peliculas.length === 0  ?
            
            <img src={cargando} alt=''/> :

             this.state.peliculas.map( (popular,index) => {
                return <Content key = {index}
                id = {popular.id}
                 title = {popular.title}
                 poster = {`https://image.tmdb.org/t/p/w342/${popular.poster_path}`}
                 overview  = {popular.overview} 
                 salida = {popular.release_date}
                 idioma = {popular.original_language}
                 vote = {popular.vote_average}
                 removerPelicula = {(id)=>this.removerPelicula(id)}
             
                 
                 
                 />
                 
          } 
          ) }  
        </div>
    )
}
}