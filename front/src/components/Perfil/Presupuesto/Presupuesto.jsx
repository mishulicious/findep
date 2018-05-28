import React, {Component} from 'react';
import {Table} from 'semantic-ui-react';

class Presupuesto extends Component{
    render(){
        return(
           <div>
               <h1>Presupuesto</h1>

                <Table color="blue">
                    <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Tipo</Table.HeaderCell>
                        <Table.HeaderCell>Planeado</Table.HeaderCell>
                        <Table.HeaderCell>Real</Table.HeaderCell>
                        <Table.HeaderCell>Diferencia</Table.HeaderCell>
                    </Table.Row>
                    </Table.Header>

                    <Table.Body>
                    <Table.Row>
                        <Table.Cell>Renta</Table.Cell>
                        <Table.Cell>200</Table.Cell>
                        <Table.Cell>200</Table.Cell>
                        <Table.Cell>0</Table.Cell>
                    </Table.Row>
                    <Table.Row>
                        <Table.Cell>Comida</Table.Cell>
                        <Table.Cell>310</Table.Cell>
                        <Table.Cell>4058493</Table.Cell>
                        <Table.Cell>vario</Table.Cell>
                    </Table.Row>

                    </Table.Body>
                </Table>
           </div>
        )
    }
}

export default Presupuesto;