import React, {Component} from 'react';
import {Articulo} from './Articulo';
import {Articulos} from '../../../articulos';

class ListaArticulos extends Component{
    state={
        movies: Articulos,
    }

    render(){
        return(
            <div>
                <div style={styles.conFlex}>
                    {this.state.movies.map(movie=>{
                        return(
                            <Articulo key={movie.id} movie={movie} {...movie}/>
                        );
                    })}
                </div>
            </div>
        );
    }
}

const styles = {
    conFlex: {
        display: 'flex',
        flexWrap:'wrap',
    }
}

export default ListaArticulos;
