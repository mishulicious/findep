import React, { Component } from 'react'
import { Menu, Header, Image } from 'semantic-ui-react'

export default class MenuPerfil extends Component {
  handleItemClick = name => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state || {}

    return (
      <Menu vertical borderless inverted color="violet" fixed="left" style={{"margin-top":"40px", "text-align": "left"}}>
        <Menu.Item>
        <Header as='h2'>
                        <Image circular src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                        {' '}Marie Sanz
        </Header>

          <Menu.Header>Diagnostico</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='resultados' active={activeItem === 'resultados'} onClick={this.handleItemClick} />
            <Menu.Item name='tomar de nuevo' active={activeItem === 'tomar de nuevo'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Plan</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='mi plan' active={activeItem === 'mi plan'} onClick={this.handleItemClick} />
            <Menu.Item name='nuevo plan' active={activeItem === 'nuevo plan'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Registro</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='registrar ingresos y gastos' active={activeItem === 'registrar ingresos y gastos'} onClick={this.handleItemClick} />
          </Menu.Menu>
        </Menu.Item>

        <Menu.Item>
          <Menu.Header>Tips</Menu.Header>

          <Menu.Menu>
            <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleItemClick}>
              Blog
            </Menu.Item>

            <Menu.Item name='tips para mi' active={activeItem === 'tips para mi'} onClick={this.handleItemClick}>
              Tips para mi
            </Menu.Item>
          </Menu.Menu>
        </Menu.Item>
      </Menu>
    )
  }
}