import React, { Component } from 'react';
import {Meta} from './Meta';
import {getMetas} from '../../../services/Metas';
import NuevaMeta from './NuevaMeta';
import MenuPerfil from '../MenuPerfil';
import {Grid} from 'semantic-ui-react';

class Metas extends Component {
  state={
    metas: []
  };

  componentWillMount(){

    if(!localStorage.getItem("user")) return this.props.history.push('/');

    getMetas()
        .then(metas=>{
            this.setState({metas});
        })
        .catch(e=>console.error(e));
}

  render() {
    return (
      <section>
        <h2>Mis metas</h2>
        <Grid divided='vertically'>
            <Grid.Row columns={2} >
                <Grid.Column width={3} style={{"paddingTop":"0", "height":"1000px"}}>
                    <MenuPerfil/>
                </Grid.Column>
                
                <Grid.Column width={13}>
                <div style={{display:'flex'}}>
                  {this.state.metas.map(meta=>{
                    return(
                      <Meta {...meta} key={meta._id}/>
                    )
                  })}
                </div>
                <NuevaMeta/>
                </Grid.Column>
            </Grid.Row>
        </Grid> 
      </section>
    )
  }
}

export default Metas;