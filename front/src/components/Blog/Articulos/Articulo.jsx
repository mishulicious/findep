import React from 'react';
import {Link} from 'react-router-dom';
import { Card } from 'semantic-ui-react'

export const Articulo = ({id, title, poster,description}) =>{
    return(
        <div style={{margin:'20px', cursor:'pointer', width:'20%'}}>
            <Link to={`blog/${id}`}>
                <Card color="blue">
                    <Card.Content header={title}/>
                    {/* <Card.Content description={description} /> */}
                    <Card.Content extra>
                        {description}
                    </Card.Content>
                </Card>
            </Link>
        </div> 
    )
}





{/* 
<Link to={`blog/${id}`}>
     <img src={poster} style={{width:100}} alt=""/>
     <h2>{title}</h2>
 </Link>
*/}