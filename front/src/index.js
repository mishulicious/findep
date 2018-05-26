import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {BrowserRouter} from 'react-router-dom';

//Style
import 'semantic-ui-css/semantic.min.css';


const WithRouter = () =>{
    return(
        <BrowserRouter><App/></BrowserRouter>
    )
}

ReactDOM.render(<WithRouter/>, document.getElementById('root'));
registerServiceWorker();
