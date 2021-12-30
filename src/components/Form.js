import React, { Component } from 'react'

export class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             userName : ''
        }
    }
    
    handleUserNameChage = (event) => {

        this.setState({
            userName : event.target.value
        })
    }

    handleSubmitEvent = (event) => {

        alert(` ${this.state.userName}`)
        event.preventDefault()
    }

    render() {
        return (
           <form onSubmit={this.handleSubmitEvent}>
              User Name :   <input type="text" value={this.state.userName} 
               onChange={this.handleUserNameChage}></input>

               <button type="submit"> Submit </button>
           </form> 
        )
    }
}

export default Form
