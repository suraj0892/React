import React, { PureComponent } from 'react'
import ChildPureComponent from './ChildPureComponent'
import RegularComponent from './RegularComponent'

export class ParentPureComponent extends PureComponent {

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
        }, 2000);
    }
    
    render() {
        console.log('++++++++++ Parent +++++++')
        return (
            <div>
                <>
                <h1>Parent pure Component {this.state.name}</h1>
                <RegularComponent></RegularComponent>
                <ChildPureComponent></ChildPureComponent>
                </>
            </div>
        )
    }
}

export default ParentPureComponent
