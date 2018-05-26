import React, {Component} from 'react';
import MenuPerfil from './MenuPerfil';
import {Grid, Image,  Header } from 'semantic-ui-react';

class Perfil extends Component{
    state={
        user: {},
    }

    componentWillMount(){
        if(!localStorage.getItem("user")) return this.props.history.push('/login');
        let user= JSON.parse(localStorage.getItem("user"));
        this.setState({user})
    }

    render(){
        const user = this.state;

        return(
            <div className="perfil">
            <p>Tu nombre:{user.name}</p>
            <Grid divided='vertically'>
                <Grid.Row columns={2} >
                <Grid.Column width={3} style={{"padding-top":"0", "height":"1000px"}}>
                    <MenuPerfil/>
                </Grid.Column>
                <Grid.Column width={13}>
                    <Header as='h2'>
                        <Image circular src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                        {' '}Marie Sanz
                    </Header>
                    <p>{user.name}</p>
                </Grid.Column>
                </Grid.Row>
            </Grid>
            </div>
        )
    }
};

export default Perfil;
