import React, {Component} from 'react';
import {Button, Icon, Table, Card, Form, Radio, Segment} from 'semantic-ui-react';


class Registro extends Component{
    render(){
        return(
        <section>
         <h3>Registro gastos</h3>
            <Button circular icon='plus' basic color="blue"/>

            <Segment basic>
             <Form>
                <h5>Filtros</h5>
                <Form.Group widths='equal'>
                <Form.Input fluid label='Categorías' placeholder='Read only' readOnly />
                <Form.Input fluid label='Descripción' placeholder='Read only' readOnly />
                <Form.Input fluid label='Cantidad' placeholder='Read only' readOnly>
                    <Radio slider />
                </Form.Input>
                </Form.Group>
             </Form>
            </Segment>

            <Segment basic>
                <Card.Group>
                    <Card>
                    <Card.Content>
                        <Card.Header>
                        Gastos Totales
                        </Card.Header>
                        <Card.Description>
                        $20, 000.00
                        </Card.Description>
                    </Card.Content>
                    </Card>
        
                    <Card>
                    <Card.Content>
                        <Card.Header>
                        Ingresos Totales
                        </Card.Header>
                        <Card.Description>
                        $30, 000.00
                        </Card.Description>
                    </Card.Content>
                    </Card>
        
                    <Card>
                    <Card.Content>
                        <Card.Header>
                        Total
                        </Card.Header>
                        <Card.Description>
                        $10, 000.00
                        </Card.Description>
                    </Card.Content>
                    </Card>
                </Card.Group>
            </Segment>

            <Segment basic>
                <Table color="blue">
                    <Table.Body>

                    <Table.Row>
                        <Table.Cell collapsing>
                        <Icon name='food' />
                            comida
                        </Table.Cell>
                        <Table.Cell>10 Mayo</Table.Cell>
                        <Table.Cell>Pizza de Liru Sisa</Table.Cell>
                        <Table.Cell>$70.00</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell collapsing>
                        <Icon name='food' />
                            comida
                        </Table.Cell>
                        <Table.Cell>10 Mayo</Table.Cell>
                        <Table.Cell>Pizza de Liru Sisa</Table.Cell>
                        <Table.Cell>$70.00</Table.Cell>
                    </Table.Row>

                    <Table.Row>
                        <Table.Cell collapsing>
                        <Icon name='food' />
                            comida
                        </Table.Cell>
                        <Table.Cell>10 Mayo</Table.Cell>
                        <Table.Cell>Pizza de Liru Sisa</Table.Cell>
                        <Table.Cell>$70.00</Table.Cell>
                    </Table.Row>

                    </Table.Body>
                </Table>
            </Segment>
            
          </section>
        )
    }
}

export default Registro;