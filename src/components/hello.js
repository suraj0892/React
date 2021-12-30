import React from "react";

export const Hello =() => {
    // return(
    //     <h1>Hello Suraj , Welcome</h1>
    // )

    const h1= React.createElement('h1', {id : "divId"}, 'React App')
    return React.createElement('div',null, h1)
}