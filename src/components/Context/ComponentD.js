import React, { Component } from 'react'
import { UserContext } from './ContextDemo'




export class ComponentD extends Component {
    static contextType = UserContext
    render() {
        return (
            <div>
               <h1>By using Context type {this.context}</h1> 
            </div>
        )
    }
}

export default ComponentD
