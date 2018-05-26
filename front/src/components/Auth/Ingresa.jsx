import React from 'react';
import Registrate from './Registrate';
import { Button, Image, Modal } from 'semantic-ui-react';

export const Ingresa = ()=>{
    return(
            <Modal size="small" dimmer='blurring' trigger={<Button inverted color='purple'>Regístrate</Button> }>
                <Modal.Header>Ingresa</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <Registrate/>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    )   
};