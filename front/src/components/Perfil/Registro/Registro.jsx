import React, {Component} from 'react';
import MenuPerfil from '../MenuPerfil';
import {Grid} from 'semantic-ui-react';

class Registro extends Component{
    render(){
        return(
        <section>
            <h2>Registro</h2>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                    <Grid.Column width={3} style={{"paddingTop":"0", "height":"1000px"}}>
                        <MenuPerfil/>
                    </Grid.Column>
                    
                    <Grid.Column width={13}>
                        <h3>Registro gastos</h3>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
          </section>
        )
    }
}

export default Registro;