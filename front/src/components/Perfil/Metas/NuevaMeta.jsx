import React, {Component} from 'react';
import {addMeta} from "../../../services/Metas";
import { Form, Button } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom'

class NuevaMeta extends Component{

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
        addMeta(this.state.meta)
        .then(meta=>{
            this.props.history.push('/perfil');
            window.location.reload();
        })
    };

    render(){
        const { user } = this.state;
        return(
            <div>
                <p>Nueva meta</p>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Field>
                        <label>Nombre</label>
                        <input type="text" name="name" id="" placeholder='Nombre' onChange={this.handleChange}/>
                    </Form.Field>
                    <Form.Field>
                        <label>Sube tu foto</label>
                        <input type="file" onChange={this.loadFile}/>
                    </Form.Field>
                    
                    <Form.Group widths='equal'>
                        <Button className='inicia' inverted color='blue' htmlType="submit">Agregar</Button>
                    </Form.Group>
                </Form>
            </div>
        )
    }
}

export default withRouter(NuevaMeta);