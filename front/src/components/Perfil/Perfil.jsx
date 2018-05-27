import React, {Component} from 'react';
import MenuPerfil from './MenuPerfil';
import {Grid } from 'semantic-ui-react';
import Metas from './Metas/Metas';
import Tips from './Tips/Tips';

class Perfil extends Component{

    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user= JSON.parse(localStorage.getItem("user"));
        this.setState({user})
    }

    render(){
        return(
            <section>
            <h2>Mis metas</h2>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                    <Grid.Column width={3} style={{"paddingTop":"0", "height":"1000px"}}>
                        <MenuPerfil/>
                    </Grid.Column>
                    
                    <Grid.Column width={13}>
                        <Metas/>
                    </Grid.Column>
                </Grid.Row>
            </Grid> 
          </section>
        )
    }
};

export default Perfil;