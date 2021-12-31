import React, { Component } from 'react'
import { UserContextConsumer } from './ContextDemo'

export class ComponentC extends Component {
    render() {
        return (
            <UserContextConsumer>
                {
                    (user) => {
                        return <h1>Hello {user}</h1>
                    }
                }
            </UserContextConsumer>
        )
    }
}

export default ComponentC
