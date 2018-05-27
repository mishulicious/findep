import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {logout} from '../../services/Auth';
import Registrate from '../Auth/Registrate';
import Inicia from '../Auth/Inicia';
import {Menu, Modal, Image } from 'semantic-ui-react';
import {withRouter} from 'react-router-dom';

class Navbar extends Component {
  state = { activeItem: 'home',
  current: "mail",
  user:{},
  isLoggedIn: false
}

  handleClick = (e)=>{
    console.log('click',e);
    this.setState({
      current:e.key
    });
  };

  handleLogout = () => {
    logout()
        .then(res=>{
            this.setState({isLoggedIn:false, user:{}});
            this.props.history.push("/");
            //message.success(res.message);
        })
  };

  componentWillMount(){
    if(!localStorage.getItem("user")) return this.props.history.push('/');
    let user = JSON.parse(localStorage.getItem("user"));
    this.setState({user,isLoggedIn:true})
}

  render() {
    const { activeItem, isLoggedIn } = this.state;

    return (
      <div>
      
        <Menu secondary>
        <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}> <Link to='/'><Image src="http://res.cloudinary.com/alinardz/image/upload/v1527385056/findep-logo-01.png" style={{"width":"150px"}}></Image></Link></Menu.Item>
        
          {/* <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleClick}> <Link to='/'>Home {user.name}</Link> </Menu.Item> */}
           <Menu.Menu position='right'>

            <Menu.Item name='perfil' active={activeItem === 'perfil'} style={{display: isLoggedIn? 'block': 'none'}}  onClick={this.handleClick}><Link to='/perfil'>Perfil</Link></Menu.Item>

            <Modal size="small" trigger={<Menu.Item name='ingresa' style={{display: !isLoggedIn? 'block': 'none'}}><Link to='/'>Ingresa</Link></Menu.Item>}>
                <Modal.Header>Ingresa</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <Registrate/>
                </Modal.Description>
                </Modal.Content>
            </Modal>


            <Modal size="small" trigger={<Menu.Item name='ingresa' style={{display: !isLoggedIn? 'block': 'none'}}><Link to='/'>Inicia Sesión</Link></Menu.Item>}>
                <Modal.Header>Inicia Sesión</Modal.Header>
                <Modal.Content image>
                <Image wrapped size='medium' src='http://bldgwlf.com/wp-content/uploads/2016/01/Naomi-Wilkinson-03.gif' />
                <Modal.Description style={{"width":"45%"}}>
                    <Inicia/>
                </Modal.Description>
                </Modal.Content>
            </Modal>

            <Menu.Item name='diagnóstico' active={activeItem === 'diagnóstico'} onClick={this.handleClick}><Link to='/diagnostico'>Diagnóstico</Link></Menu.Item>
            
            <Menu.Item name='logout' style={{display: isLoggedIn? 'block': 'none'}} active={activeItem === 'logout'} onClick={this.handleLogout}>Cerrar Sesión</Menu.Item>

            <Menu.Item name='blog' active={activeItem === 'blog'} onClick={this.handleClick}><Link to='/blog'>Blog</Link></Menu.Item>

{/*             BARRA BUSQUEDA
            <Menu.Item>
              <Input icon='search' placeholder='Search...' />
            </Menu.Item>
             */}
        </Menu.Menu>

        </Menu>
      </div>
    )
  }
}

export default withRouter(Navbar);