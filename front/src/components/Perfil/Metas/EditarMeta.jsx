import React, {Component} from 'react';
import { Form, Button,Input, Label, Image,Modal } from 'semantic-ui-react';
import {editMeta} from "../../../services/Metas";
import {withRouter} from 'react-router-dom';
import MetaForm from './MetaForm';

class EditarMeta extends Component{

    state = {
        user: {},
        meta: {}
    };
    
    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user = JSON.parse(localStorage.getItem("user"));
        this.setState({user})
    }

    handleChange = (e) => {
        const {meta} = this.state;
        const field = e.target.name;
        meta[field] = e.target.value;
        this.setState({meta});
    };

    loadFile = (e) => {
        const {meta} = this.state;
        meta["picture"] = e.target.files[0];
        this.setState({meta})
    };

    handleSubmit = (e) => {
        e.preventDefault();
        editMeta(this.state.meta)
        .then(meta=>{
            this.props.history.push('/perfil/metas');
            window.location.reload();
        })
    };

    render(){
        return(
            <div>
                <p>Nueva meta</p>


            <Modal size="small" dimmer='blurring' trigger={<Button size="huge" inverted color='violet'>Editar Meta</Button> }>
                <Modal.Content image>
                <Image wrapped size='medium' src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                <Modal.Description style={{"width":"45%"}}>

                     <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input type="text" name="name" id="" placeholder='Nombre' onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Sube tu foto</label>
                        <input type="file" onChange={this.loadFile}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Fecha Inicial</label>
                        <input type="date" name="dateStart" onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                        <label>Fecha Final</label>
                        <input type="date" name="dateEnd" onChange={this.handleChange}/>
                    </Form.Field>

                    <Form.Field>
                      <Input labelPosition='right'type="number" name="initialQuantity" onChange={this.handleChange}  placeholder='cantidad inicial'>
                            <Label basic>$</Label>
                            <input />
                            <Label>.00</Label>
                        </Input>
                    </Form.Field>

                    <Form.Field>
                        <label>Cantidad Total</label>
                        <input type="number" name="totalQuantity" onChange={this.handleChange}/>
                    </Form.Field>
                    
                    <Form.Group widths='equal'>
                        <Button className='inicia' inverted color='blue' htmlType="submit">Agregar</Button>
                    </Form.Group>
                </Form>

                </Modal.Description>
                </Modal.Content>
            </Modal>
            </div>
        )
    }
}

export default withRouter(EditarMeta);



