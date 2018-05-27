import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Homepage from './components/Home/Homepage';
import Perfil from './components/Perfil/Perfil';
import {Ingresa} from './components/Auth/Ingresa';
import Blog from './components/Blog/Blog';
import Diagnostico from './components/Perfil/Diagnostico/Diagnostico';
import NuevaMeta from './components/Perfil/Metas/NuevaMeta';
import Registro from './components/Perfil/Registro/Registro';
import Metas from './components/Perfil/Metas/Metas';
import Presupuesto from './components/Perfil/Presupuesto/Presupuesto';
import Tips from './components/Perfil/Tips/Tips';
import Logros from './components/Perfil/Logros/Logros';


export const Routes = ()=>{
    return(
        <Switch>
            <Route exact path='/' component={Homepage}/>
            <Route path='/perfil' component={Perfil}/>
            <Route path='/ingresa' component={Ingresa}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/diagnostico' component={Diagnostico}/>
            <Route path='/nuevameta' component={NuevaMeta}/>
            <Route path='/registro' component={Registro}/>
            <Route path='/metas' component={Metas}/>
            <Route path='/presupuesto' component={Presupuesto}/>
            <Route path='/tips' component={Tips}/>
            <Route path='/logros' component={Logros}/>
        </Switch>
    )
};