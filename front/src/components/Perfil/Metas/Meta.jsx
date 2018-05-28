import React from 'react';
import { Card, Image, Button, Progress} from 'semantic-ui-react';
import {Progreso} from './Progreso';
import {NuevaMeta} from './NuevaMeta';
import EditarMeta from './EditarMeta';

export const Meta =(props)=> {
        return(
          <div style={{marginLeft:"3%"}}>
            <Card>
            <Image src={props.picture ? props.picture : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
            <Card.Content>
              <Card.Header>{props.name}</Card.Header>
              <Card.Meta>
                <span className='date'>
                  {props.dateEnd}
                </span>
              </Card.Meta>

              <Card.Description>
                Te faltan: ${props.total}
              </Card.Description>

            </Card.Content>

            <Card.Content extra>

              <Progress size ="tiny" percent={props.percent} indicating label={"Progreso: " + props.percent + "%"}/>
                <Button circular basic color='blue' icon='trash' onClick={()=>props.delete(props._id)}/>
                <Button circular basic color='violet' icon='edit'/>
              </Card.Content> 
          </Card>
          <EditarMeta/>
          </div>
        )
}
