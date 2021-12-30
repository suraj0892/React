import React, { Component } from 'react'
import UpdatedComponent  from './withCounter'
export class ButtonCounter extends Component {

  

    render() {
        const {incrementHandler , counter} = this.props
        return (
           
            <div>
                <button onClick={incrementHandler}> Button Clicked {counter} times</button>
            </div>
        )
    }
}

export default UpdatedComponent(ButtonCounter)
