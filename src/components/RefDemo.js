import React, { Component } from 'react'

export class RefDemo extends Component {
    constructor(props) {
        super(props)
    
        this.inputRef = React.createRef()

        this.cbRef = null
        this.setCbRef = (element) => {
            this.cbRef = element
        }

        this.state = {
             
        }
    }
    
    componentDidMount() {
        
       if(this.cbRef){
           this.cbRef.focus()
       }

        // this.inputRef.current.focus()
    }

    clickHandler = () => {
        alert(this.cbRef)
        // alert(this.inputRef.current.value)
    }

    render() {
        return (
            <div>
                <input type='text' ref={this.inputRef}></input>
                <br></br>
                <input type='text' ref={this.cbRef}></input>
                <button onClick={this.clickHandler}>Click Me </button>
            </div>
        )
    }
}

export default RefDemo

