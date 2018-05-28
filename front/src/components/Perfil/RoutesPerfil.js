import React from 'react';
import {Switch, Route} from 'react-router-dom';

import Resumen from './Resumen/Resumen';
import Diagnostico from './Diagnostico/Diagnostico';
import Registro from './Registro/Registro';
import Metas from './Metas/Metas';
import Presupuesto from './Presupuesto/Presupuesto';
import Tips from './Tips/Tips';
import Logros from './Logros/Logros';


export const RoutesPerfil = ()=>{
    return(
        <Switch>
            <Route path='/perfil/resumen' component={Resumen}/>
            <Route path='/perfil/diagnostico' component={Diagnostico}/>
            <Route path='/perfil/registro' component={Registro}/>
            <Route path='/perfil/metas' component={Metas}/>
            <Route path='/perfil/presupuesto' component={Presupuesto}/>
            <Route path='/perfil/tips' component={Tips}/>
            <Route path='/perfil/logros' component={Logros}/>
        </Switch>
    )
};