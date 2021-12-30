import React from 'react'
import ReactDOM  from 'react-dom'

function PortalRootDemo() {
    return ReactDOM.createPortal(
            <h1>PORTAL DEMO</h1>
        , document.getElementById('portal-root')
    )
}

export default PortalRootDemo
