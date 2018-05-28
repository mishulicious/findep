import React from 'react';
import MetaForm from './MetaForm';
import { Button, Image, Modal } from 'semantic-ui-react';

export const NuevaMeta = ()=>{
    return(
            <Modal size="small" dimmer='blurring' trigger={<Button size="huge" inverted color='violet'>Agregar Meta</Button> }>
                <Modal.Content image>
                <Image wrapped size='medium' src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <MetaForm/>
                </Modal.Description>
                </Modal.Content>
            </Modal>
    )   
};