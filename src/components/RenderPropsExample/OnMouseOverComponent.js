import React, { Component } from 'react'

export class OnMouseOverComponent extends Component {
   
    render() {

        const {clickHandler, count} = this.props

        return (
            <div>
                <h1 onMouseOver={clickHandler}> Hover {count} times</h1>
            </div>
        )
    }
}

export default OnMouseOverComponent
