import React from 'react'

function IndexAsKey() {

    const names = ['one', 'two', 'three']
    const namesList =  names.map((name, index) => {
       return <h1 key={index}>{index} {name}</h1>
    })
    return (

        <div>
            {namesList}
        </div>
    )
}

export default IndexAsKey
