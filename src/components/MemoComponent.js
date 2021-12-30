import React from 'react'

function MemoComponent(props) {
    const {name} = props;

    console.log('Child Memo')
    return (
        <div>
            <h1>Memo Render {name}</h1>
        </div>
    )
}

export default React.memo(MemoComponent)
