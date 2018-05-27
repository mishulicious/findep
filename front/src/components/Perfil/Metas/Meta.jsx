import React, {Component} from 'react';
import { Card, Image, Button, Progress } from 'semantic-ui-react';

export const Meta =({name,user,picture,description})=> {
        return(
          <div style={{marginLeft:"3%"}}>
            <Card>
            <Image src={picture ? picture : "https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"} />
            <Card.Content>
              <Card.Header>{name}</Card.Header>
              <Card.Meta>
                <span className='date'>
                  Mayo 2019
                </span>
              </Card.Meta>
              <Card.Description>
                Llevas: Te falta:
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Progress indicating />
                <Button>Increment</Button>
            </Card.Content>
          </Card>
          </div>
        )
}
/* 
import React, {Component} from 'react';
import { Card, Image, Button, Progress } from 'semantic-ui-react';

class Meta extends Component {
    state ={ percent: 33 }

    increment = () => this.setState({
      percent: this.state.percent >= 100 ? 0 : this.state.percent + 20,
    })
  
    render(){
        return(
            <Card>
            <Image src='https://www.japan.go.jp/_src/7808492/img_keyvisual_01_sp.jpg' />
            <Card.Content>
              <Card.Header>Ir a Japón</Card.Header>
              <Card.Meta>
                <span className='date'>
                  Mayo 2019
                </span>
              </Card.Meta>
              <Card.Description>
                Llevas: Te falta:
              </Card.Description>
            </Card.Content>
            <Card.Content extra>
                <Progress percent={this.state.percent} indicating />
                <Button onClick={this.increment}>Increment</Button>
            </Card.Content>
          </Card>
        )
    }

}

export default Meta; */