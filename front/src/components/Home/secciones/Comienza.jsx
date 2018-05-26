import React from 'react';
import {Ingresa} from '../../Auth/Ingresa'
import { Segment } from 'semantic-ui-react';

export const Comienza = ()=>{
    return(
        <div className="comienza">
        <Segment basic>
            <Ingresa/>
        </Segment>
        </div>
    )   
};