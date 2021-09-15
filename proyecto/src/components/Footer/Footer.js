import React, {Component} from 'react';
import logo from '../img/TMDB.png';
import "./Footer.css";

class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(

            <footer className="padre">
                <p className="texto">Hecho por Matias Gallardo y Yoel Park.    </p>
                <img className="tmdb" src={logo} alt=''/>
            </footer>
            

        )
    }
}

export default Footer;