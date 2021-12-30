import React, { Component } from 'react'

export class Hero extends Component {

    constructor(props) {
        super(props)
    
    }
    
    

    render() {  
        const heroname = this.props.heroname;
        if(heroname === 'Joker'){
            throw new Error('Joker is a villian')
        }

        return (
            <div>
                {heroname}
            </div>
        )
    }
}

export default Hero
