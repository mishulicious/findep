import React, {Component} from 'react';
import {Label} from 'semantic-ui-react';

class Blog extends Component{
    render(){
        return(
           <div>
               <h2>Categorías</h2>
               <div>
                <Label as='a' color='red' size="massive">
                    Cetes
                </Label>
                <Label as='a' color='orange' size="massive">
                    Ahorro para el retiro
                </Label>
                <Label as='a' color='yellow' size="massive">
                    Seguros de gastos médicos
                </Label>
                <Label as='a' color='olive' size="massive">
                    Créditos
                </Label>
                <Label as='a' color='green' size="massive">
                    Fondo de emergencia
                </Label>
                <Label as='a' color='teal' size="massive">
                    Criptomonedas
                </Label>
                <Label as='a' color='blue' size="massive">
                    Hipotecas
                </Label>
                <Label as='a' color='violet' size="massive">
                    Inversiones
                </Label>
               </div>
           </div>
        )
    }
}

export default Blog;