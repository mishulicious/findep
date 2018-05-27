import React, {Component} from 'react';
import MenuPerfil from './MenuPerfil';
import {Grid } from 'semantic-ui-react';
import Metas from './Metas/Metas';
import Tips from './Tips/Tips';
import Resumen from './Resumen/Resumen';

class Perfil extends Component{

    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user= JSON.parse(localStorage.getItem("user"));
        this.setState({user})
    }

    render(){
        return(
            <div className="perfil">
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                    <Grid.Column width={3} style={{"paddingTop":"0", "height":"1000px"}}>
                        <MenuPerfil/>
                    </Grid.Column>
                    
                    <Grid.Column width={12}>
                        <Metas/>
                        <Resumen/>
                        <Tips/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
};

export default Perfil;
