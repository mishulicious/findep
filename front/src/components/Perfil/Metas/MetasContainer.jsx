import React, { Component } from 'react';
import {Metas} from './Metas';


class MetasContainer extends Component{
    state ={
        metas: [{}]
    }

    addQuantity = () =>{
        let {quantity} = this.state;
        quantity++;
        this.setState({quantity});
      };

    render(){
        console.log(this.state.foods)
        return(
            <div>
                <FoodList foods={this.state.foods}/>
            </div>
        );
    }

}

export default MetasContainer;