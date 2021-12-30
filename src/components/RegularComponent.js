import React, { Component } from 'react'

export class RegularComponent extends Component {
   
    constructor(props) {
        super(props)
    
        this.state = {
             name : 'suraj'
        }
    }
    

    // componentDidMount(){
    //     setInterval(() => {
    //         this.setState({
    //             name : 'suraj' + Date.now()
    //         })
    //     }, 2000);
    // }


    render() {
        console.log('++++++++++ REgular +++++++')
        return (
            <div>
                <h1>Regular Component</h1>
            </div>
        )
    }
}

export default RegularComponent
