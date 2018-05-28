import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Blog extends Component{
    render(){
        return(
           <div>
               <h2 style={{fontSize:"2rem"}}>¿Qué quieres aprender hoy</h2>

               <div className="containerBlog">
                    <Link to='/blog' className="cardCat">
                        <i className="card__circle"></i>
                        <p>Seguros</p>
                    </Link>

                    <a href="#" className="cardCat card1">
                        <i className="card__circle"></i>
                        <p>Fondo para el retiro</p>
                    </a>

                    <a href="#" className="cardCat card--alt-3">
                        <i className="card__circle"></i>
                        <p>Tarjetas de crédito</p>
                    </a>

                    <a href="#" className="cardCat card--alt-2">
                        <i className="card__circle"></i>
                        <p>Fondo de emergencia</p>
                    </a>

                    <a href="#" className="cardCat">
                        <i className="card__circle"></i>
                        <p>Crédito de auto</p>
                    </a>
                    <a href="#" className="cardCat card--alt-2">
                        <i className="card__circle"></i>
                        <p>Hipoteca</p>
                    </a>

                    <a href="#" className="cardCat card--alt-3">
                        <i className="card__circle"></i>
                        <p>CETES</p>
                    </a>
                    <a href="#" className="cardCat card--alt-4">
                        <i className="card__circle"></i>
                        <p>Inversiones en la bolsa</p>
                    </a>

                    <a href="#" className="cardCat card1">
                        <i className="card__circle"></i>
                        <p>Criptomonedas</p>
                    </a>
                    </div>

           </div>
        )
    }
}

export default Blog;