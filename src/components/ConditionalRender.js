import React, { Component } from 'react'

export class ConditionalRender extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             isLoggedIn : false
        }
    }
    
    LoginOrLogout = () => {
        
        this.setState((previousState) => ({
            isLoggedIn : !previousState.isLoggedIn
        }), console.log(this.state.isLoggedIn))
       
    }

    render() {
        if(this.state.isLoggedIn) {
            return ( <div>
                 <h1>Welcome User</h1>
                 <button onClick={this.LoginOrLogout}> Logout </button>
             </div>
            )
             }
             else{
             return (
             <div>
                 <h1>Welcome Guest</h1>
                 <button onClick={this.LoginOrLogout}> Login </button>
             </div>
             )
             }
    }
}

export default ConditionalRender
