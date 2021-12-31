import React, { Component } from 'react'
import { UserContextConsumer } from './ContextDemo'

export class ComponentA extends Component {
    render() {
       
        return (
           <UserContextConsumer>
               {
                   (userContext) => {
                       return (<h1>Hello {userContext} </h1>)
                    
                   }
               }
           </UserContextConsumer>
        )
    }
}

export default ComponentA
