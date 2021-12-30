import React, { Component } from 'react'
import { LifeCycleMethodsB } from './LifeCycleMethodsB';
import ButtonClick from './ButtonClick';

export class LifeCycleMethods extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            messae : 'lifecycle A'       
        }
        console.log('Instance A constrcutor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Instance A deried props')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Instance A getSnapshotBefore update')
        console.log(prevProps,' ', prevState )
        return null
    }

    shouldComponentUpdate(){
        console.log('Instance A should Component Update')
        return true
    }

    componentDidUpdate(){
        console.log('Instance A Component Update')
    }

    ComponentUpdateHandler = ()  => {
        this.setState({
            messae : 'lifecycle A Updated'
        })
    }

    render() {
        console.log('Instance A render')
        return (
            
            <div>
                <h1>{this.state.messae}</h1>
                <button onClick={this.ComponentUpdateHandler}>Update Component</button>
                <LifeCycleMethodsB/>
            </div>
        )
    }

    componentDidMount(){
        console.log('INstance A mounted')
    }
}



export default LifeCycleMethods
