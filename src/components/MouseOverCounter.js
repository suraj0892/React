import React, { Component } from 'react'
import UpdatedComponent  from './withCounter'

export class MouseOverCounter extends Component {
    
    

    render() {
        const {incrementHandler , counter} = this.props
        return (
            <div>
                <h1 onMouseOver={incrementHandler}>Hover {counter} times </h1>
            </div>
        )
    }
}

export default UpdatedComponent(MouseOverCounter)
