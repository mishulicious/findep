import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Grid, Button } from 'semantic-ui-react';

export const Diagnostico = ()=>{
    return(
        <Segment basic>
        <h3 style={{"fontSize":"2.714286rem"}}>Diagnóstico</h3>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7}>
                    <img style={{"width":"350px"}} src="https://res.cloudinary.com/alinardz/image/upload/v1527381315/metas.png" alt=""/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <div style={{"padding":"90px 10% 0 0", "fontSize":"1.51429rem"}}>
                        <p>¿Qué tan saludables son tus finanzas actualmente? ¡Descúbrelo!</p>
                        <Button inverted color='blue'onClick={this.handleSubmit} ><Link style={{"textDecoration": "none", "color": "inherit"}} to='/diagnostico'>Diagnóstico Express</Link></Button>
                    </div>
                </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Segment>
    )   
};

