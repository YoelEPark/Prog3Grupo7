import React, {Component} from 'react';

class Header extends Component {

    constructor(props){
        super(props)
        this.state = {}
    }

    render(){
        return(

            <div>
                <ul>
                    <li>Home</li>
                    <li>Estrenos</li>
                    <li>Más populares</li>
                </ul>
            </div>

        )
    }
}

export default Header;