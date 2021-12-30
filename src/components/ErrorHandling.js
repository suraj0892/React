import React, { Component } from 'react'

export class ErrorHandling extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             hasError : false
        }
    }
    
    static getDerivedStateFromError(error){
        return ({
            hasError : true
        })
       
    }

    componentDidCatch(error, info)
{
    console.log('errr' , error)
    console.log('info' , info)
}
    render() {

        if(this.state.hasError){
            return <h1>Inside Fallback</h1>
        }
        else{
            return this.props.children
        }

    }
}

export default ErrorHandling
