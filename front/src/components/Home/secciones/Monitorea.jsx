import React from 'react';
import { Segment, Grid } from 'semantic-ui-react';

export const Monitorea = ()=>{
    return(
        <Segment basic>
            <h3 style={{"fontSize":"2.714286rem"}}>Monitorea tu avance</h3>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7}>
                <div style={{"padding":"80px 0 0 7%", "fontSize":"1.51429rem"}}>
                    <p>Registra tus ingresos y gastos, nosotros te decimos qué tan cerca estás de tus sueños.</p>
                </div>
                </Grid.Column>
                <Grid.Column width={9}>
                <img style={{"width":"450px"}} src="http://res.cloudinary.com/alinardz/image/upload/v1527387530/avances-01.png" alt=""/>
                </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Segment>
    )   
};

