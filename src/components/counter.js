import React, { Component } from 'react'

export class CounterClass extends Component {

    constructor(props){
        super(props)

        this.state = {
            count : 0
        }
    }

    increment =() => {
        this.setState((prevState) => ({
            count : prevState.count + 1
        }), console.log(this.state.count))
        // this.setState({
        //     count :  this.state.count + 1
        // }  , () =>  console.log(this.state.count)
        // )
       
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();

    }
    
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <button onClick={() => this.incrementFive()}>Count</button> 
                <h1>{this.state.count}</h1>   
            </div>
        )
    }
}


