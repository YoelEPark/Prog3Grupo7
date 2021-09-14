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

            <div className="padre">
                <p className="texto">Hecho por Yoel Park y Matias Gallardo.    </p>
                <img className="tmdb" src={logo} alt=''/>
            </div>
            

        )
    }
}

export default Footer;