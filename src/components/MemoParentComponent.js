import React, { Component } from 'react'
import MemoComponent from './MemoComponent';

export class MemoParentComponent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             name : 'suraj'
        }
    }
    

    componentDidMount(){
        setInterval(() => {
            this.setState({
                name : 'suraj'
            })
        }, 1000);
    }

    render() {
        console.log('Parent Memo')
        return (
            <div>
                <MemoComponent name ={this.state.name}></MemoComponent>
            </div>
        )
    }
}

export default MemoParentComponent
