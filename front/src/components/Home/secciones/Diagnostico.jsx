import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Image, Grid, Button } from 'semantic-ui-react';

export const Diagnostico = ()=>{
    return(
        <Segment basic>
        <h2>Diagnóstico</h2>
            <p>¿Qué tan saludables son tus finanzas actualmente? ¿Logras llegar a final de mes? ¿Ahorras algo? ¿Tienes un plan de ahorro para el retiro? ¿Inviertes tu dinero? Estás a tiempo, el primer paso es saber dónde te encuentras ¡Descúbrelo!</p>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7} style={{"padding-top":"10vh"}}>
                    <Image src='http://payload487.cargocollective.com/1/6/203498/12050276/NW_Goodhousekeeping_1final-copy_1250.jpg' />  
                </Grid.Column>
                <Grid.Column width={9}>
                    <Button inverted color='blue'onClick={this.handleSubmit} ><Link style={{"textDecoration": "none", "color": "inherit"}} to='/diagnostico'>Diagnóstico Express</Link></Button>
                </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )   
};