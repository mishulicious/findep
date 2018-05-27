import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Button, Grid } from 'semantic-ui-react';

export const Tips = ()=>{
    return(
        <Segment basic>
        <h3 style={{"fontSize":"2.714286rem"}}>Recibe tips y asesoría</h3>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={7}>
                    <img style={{"width":"350px"}} src="https://res.cloudinary.com/alinardz/image/upload/v1527385831/Untitled_Artwork_7.png" alt=""/>
                </Grid.Column>
                <Grid.Column width={9}>
                    <div style={{"padding":"70px 10% 0 0", "fontSize":"1.51429rem"}}>
                        <p>No te preocupes si no entiendes los conceptos, en nuestro blog te explicamos todo lo que debes saber para darle el mejor uso a tu dinero.</p>  
                        <Button size="big" inverted color='blue'onClick={this.handleSubmit} ><Link style={{"textDecoration": "none", "color": "inherit"}} to='/blog'>Ir al blog</Link></Button>
                    </div>
                </Grid.Column>
                </Grid.Row>
            </Grid> 
        </Segment>
    )   
};


