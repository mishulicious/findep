import React from 'react';
import {Ingresa} from '../../Auth/Ingresa';
import { Segment, Image, Grid } from 'semantic-ui-react';

export const Portada = ()=>{
    return(
        <Segment basic>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7} style={{"padding-top":"10vh"}}>
                 <h2 style={{"fontSize":"2.714286rem", "textAlign":"left", "marginLeft":"10%"}}>Descubre cómo optimizar tus finanzas para alcanzar tus sueños</h2>
                 <Ingresa/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <Image src='http://payload487.cargocollective.com/1/6/203498/12050276/NW_Goodhousekeeping_1final-copy_1250.jpg' />
                </Grid.Column>
                </Grid.Row>
            </Grid>

            {/* <img width="600px" src="http://payload487.cargocollective.com/1/6/203498/12050276/NW_Goodhousekeeping_1final-copy_1250.jpg" alt=""/> */}
        </Segment>
    )   
};