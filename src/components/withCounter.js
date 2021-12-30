import React from 'react'


const UpdatedComponent = (OriginalComponent) => {

    
    class withCounter extends React.Component {
    
        constructor(props) {
            super(props)
        
            this.state = {
                 counter : 0
            }
        }
        
    
        incrementHandler = () => {
            this.setState(prevState => {
                return {counter : prevState.counter + 1}
            })
        }
        
        render(){
            return <OriginalComponent counter = {this.state.counter} incrementHandler={this.incrementHandler}/>
        }
    }
    return withCounter
   
    
}
export default UpdatedComponent