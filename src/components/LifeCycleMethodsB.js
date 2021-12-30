import React, { Component } from 'react'

export class LifeCycleMethodsB extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
            messae : 'lifecycle B'       
        }
        console.log('Instance B constrcutor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Instance B deried props')
        return null
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Instance B getSnapshotBefore update')
        console.log(prevProps,' ', prevState )
        return null
    }

    shouldComponentUpdate(){
        console.log('Instance B should Component Update')
        return true
    }

    componentDidUpdate(){
        console.log('Instance B Component Update')
    }

    render() {
        console.log('Instance B render')
        return (
            
            <div>
                <h1>INSTANCE A</h1>
            </div>
        )
    }

    componentDidMount(){
        console.log('INstance B mounted')
    }
}

