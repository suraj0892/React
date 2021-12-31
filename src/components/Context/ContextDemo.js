import React from "react"

const UserContext = React.createContext("Guest")

const UserContextProvider = UserContext.Provider
const UserContextConsumer = UserContext.Consumer

export {UserContextConsumer, UserContextProvider, UserContext}