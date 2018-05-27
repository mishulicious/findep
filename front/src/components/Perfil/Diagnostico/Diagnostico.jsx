import React, {Component} from 'react';
import MenuPerfil from '../MenuPerfil';
import {Grid} from 'semantic-ui-react';

class Diagnostico extends Component{
    render(){
        return(
        <Grid divided='vertically'>
            <Grid.Row columns={2} >
                <Grid.Column width={3} style={{"paddingTop":"0", "height":"1000px"}}>
                    <MenuPerfil/>
                </Grid.Column>
                
                <Grid.Column width={13}>
                    <h1>Diagnóstico</h1>
                </Grid.Column>
            </Grid.Row>
        </Grid>
        )
    }
}

export default Diagnostico;