import React, { Component } from 'react'
import ChildComponent from './ChildComponent'
export class ParentComponent extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             message : 'From Parent'
        }
    }
    

    alertMessage = (childMessage) => {
        alert(`Hello ${this.state.message} ${childMessage}`)
    }
    
render() {
        return (
            <div>
                <ChildComponent clickMeAction={this.alertMessage}/>
            </div>
        )
    }
}

export default ParentComponent
