import React, { PureComponent } from 'react'

export class ChildPureComponent extends PureComponent {
    render() {
        console.log('++++++++++ Chidl Pire +++++++')
        return (
            <div>
                <>
                <h1>Inside Child Pure Component</h1>
                </>
            </div>
        )
    }
}

export default ChildPureComponent
