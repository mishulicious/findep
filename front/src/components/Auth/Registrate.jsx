import React, {Component} from 'react';
import { Form, Button } from 'semantic-ui-react';
import {signUp} from "../../services/Auth";
import {withRouter} from 'react-router-dom'

class Registrate extends Component{
    state= {
        user: {}
    };

    handleSubmit = (e) => {
        // quitamos el refresh de la página
        e.preventDefault();

        // si no entonces creamos el usuario
        signUp(this.state.user)
            .then(user=>{
                this.props.history.push('/');
                window.location.reload();
            })

    };

    handleChange = (e) => {
        const {user} = this.state;
        const field = e.target.name;
        user[field] = e.target.value;
        this.setState({user});
    };

    render() {

        return (
            <Form onSubmit={this.handleSubmit}>
            <Form.Field>
                <label>Nombre</label>
                <input type="text" name="name" id="" placeholder='Nombre'onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Correo</label>
                <input type="email" name="email" id="" placeholder='laura@callaghan.com' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Contraseña</label>
                <input type="password" name="password" id="" placeholder='xxxxx' onChange={this.handleChange}/>
            </Form.Field>
            <Form.Field>
                <label>Repite tu contraseña</label>
                <input type="password" name="password2" id="" placeholder='xxxxx'/>
            </Form.Field>
    {/*                         <Form.Field>
            <Checkbox label='Acepto los términos y condiciones' />
            </Form.Field> */}
            <Form.Group widths='equal'>
                <Button className='inicia' inverted color='blue' htmlType="submit">Regístrate</Button>
            </Form.Group>
        </Form>
        );
    }

}

export default withRouter(Registrate);
