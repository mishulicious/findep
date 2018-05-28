import React, { Component } from 'react';
import { Menu, Header, Image, Icon } from 'semantic-ui-react';
import {Link} from 'react-router-dom';

class MenuPerfil extends Component {
  state={
    user: {}
  }

  componentWillMount(){
    if(!localStorage.getItem("user")) return this.props.history.push('/login');
    let user= JSON.parse(localStorage.getItem("user"));
    this.setState({user})
}

  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem, user } = this.state || {}

    return (
      <Menu vertical borderless inverted color="teal" fixed="left" style={{"textAlign": "left"}}>
      
          <Menu.Item>
            <Header className="nombreUsuario"as='h2'>
              <Image circular src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
              {' '}{user.name}
            </Header>
          </Menu.Item>

          <Menu.Item
            name='resumen'
            active={activeItem === 'resumen'}
            onClick={this.handleItemClick}
            as={Link} to='/perfil/resumen'
          >
              <Header as='h4'>
              <Icon name='block layout' />
              <Header.Content>
                Resumen
              </Header.Content>
              </Header>
          </Menu.Item>

          <Menu.Item
            name='diagnostico'
            active={activeItem === 'diagnostico'}
            onClick={this.handleItemClick}
            as={Link} to='/perfil/diagnostico'
          >
              <Header as='h4'>
                <Icon name='file outline' />
                <Header.Content>
                  Diagnóstico
                </Header.Content>
              </Header>
          </Menu.Item>

          <Menu.Item
            name='registro'
            active={activeItem === 'registro'}
            onClick={this.handleItemClick}
            as={Link} to='/perfil/registro'
          >
              <Header as='h4'>
                <Icon name='calendar outline' />
                <Header.Content>
                  Registro
                </Header.Content>
              </Header>
          </Menu.Item>

          <Menu.Item
            name='metas'
            active={activeItem === 'metas'}
            onClick={this.handleItemClick}
            as={Link} to='/perfil/metas'
          >
              <Header as='h4'>
                <Icon name='tasks' />
                <Header.Content>
                  Metas
                </Header.Content>
              </Header>
          </Menu.Item>

          <Menu.Item
            name='presupuesto'
            active={activeItem === 'presupuesto'}
            onClick={this.handleItemClick}
            as={Link} to='/perfil/presupuesto'
          >
              <Header as='h4'>
                <Icon name='calculator' />
                <Header.Content>
                  Presupuesto
                </Header.Content>
              </Header>
          </Menu.Item>

          <Menu.Item
            name='tips'
            as={Link} to='/perfil/tips'
            active={activeItem === 'tips'}
            onClick={this.handleItemClick}
          >
              <Header as='h4'>
                <Icon name='idea' />
                <Header.Content>
                  Tips
                </Header.Content>
              </Header>
          </Menu.Item>


          <Menu.Item
            name='logros'
            active={activeItem === 'logros'}
            onClick={this.handleItemClick}
            as={Link} to='/perfil/logros'
          >
              <Header as='h4'>
                <Icon name='trophy' />
                <Header.Content>
                  Logros
                </Header.Content>
              </Header>
          </Menu.Item>

        <Menu.Item
            name='blog'
            active={activeItem === 'blog'}
            onClick={this.handleItemClick}
            as={Link} to='/blog'
          >
              <Header as='h4'>
                <Icon name='list ' />
                <Header.Content>
                  Blog
                </Header.Content>
              </Header>
          </Menu.Item>

      </Menu>
    )
  }
}

export default MenuPerfil;