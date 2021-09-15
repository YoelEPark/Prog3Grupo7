import React  from "react"
import "./Header.css";


function Header(props) {
    return (
        <header>
        <h1>Movie Programming</h1>
        <section>
            
            <i className="fas fa-th"onClick={()=>props.cuadriculado()}></i>
            <br></br>
            <i className="fas fa-align-justify" onClick={()=>props.alineado()}></i>
            <form action="">
                <input type="text" name="search" id="" placeholder="Search"/>
                <button type="submit"><i className="fas fa-search"></i></button>
            </form>
        </section>
    </header>
   
    );
  }
  
  export default Header;