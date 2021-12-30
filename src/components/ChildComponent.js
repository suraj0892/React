import React from 'react'

function ChildComponent(props) {
    return (
        <div>
            <button onClick={() => props.clickMeAction("from Child")}> Click Mee!!! </button>
        </div>
    )
}

export default ChildComponent
