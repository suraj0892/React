import React from 'react'

function ButtonClick() {


    const buttonClicked = () =>  {
        console.log("Hello World!!!!")
    }

    return (
        <div>
            <button onClick={buttonClicked()}>Click Me!!!!</button>
        </div>
    )
}

export default ButtonClick
