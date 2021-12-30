import React, { Component } from 'react'

export class ButtonCounter extends Component {
    render() {
        const {clickHandler, count} = this.props

        return (
            <div>
               <button onClick={clickHandler}>clicked {count} times</button>
            </div>
        )
    }
}

export default ButtonCounter
