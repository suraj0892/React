import React,{Component} from "react"

export class Message extends Component{

    constructor(){
        super()
        this.state = {
            message : "Please Subsribe"
        }
    }

    doSubscribe(){
        this.setState({message : "ThankYou for Subscribing"})
    }

    render = () => {
       return(
           <div>
               <h1>{this.state.message}</h1>
               <button onClick={() =>  this.doSubscribe()}> Subscribe </button>
           </div>
       )
    }
}