import React, { Component } from 'react'

export class ClassClick extends Component {

    constructor(){
        super()

    }

     clickHandler = () => {
        console.log('Button Clicked')
    }

    render() {
        return (
            <div>
                <button onClick={this.clickHandler}> Click Meee!!!!</button>
            </div>
        )
    }
}

export default ClassClick
