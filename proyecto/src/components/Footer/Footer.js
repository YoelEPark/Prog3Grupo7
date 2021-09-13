import React, {Component} from 'react';

class Footer extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(

            <div>
                <p>Hecho por Yoel Park y Matias Gallardo. <img src= "TMDB.png" alt="The Movie Data Base" /></p>
            </div>
            

        )
    }
}

export default Footer;