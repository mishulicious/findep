import React from 'react';
import {Link} from 'react-router-dom';
import { Segment, Button } from 'semantic-ui-react';

export const Tips = ()=>{
    return(
        <Segment basic>
        <h2>Recibe tips y asesoría</h2>
            <p>No te preocupes si no conoces los conceptos, conoce en nuestro blog todo lo que necesitas saber para sacarle el mejor provecho a tu dinero.</p>
            <Button inverted color='blue'onClick={this.handleSubmit} ><Link style={{"textDecoration": "none", "color": "inherit"}} to='/blog'>Ir al blog</Link></Button>
        </Segment>
    )   
};