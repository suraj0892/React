import React from 'react'

function ListRender() {

    const nameList = ['suraj', 'suraj2'] 

   
    return (
       
        <div>{
                nameList.map(name => (<h1> My Name is {name}</h1>))
            }
        </div>
    )
}

export default ListRender
