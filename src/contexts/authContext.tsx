import React, { createContext, useContext } from "react"

interface IAuthContext {}

interface IAuthContextProviderProps {
  children: React.ReactNode
}

const authContext = createContext({} as IAuthContext)

const AuthContextProvider = ({ children }: IAuthContextProviderProps) => {
  return <authContext.Provider value={{}}>{children}</authContext.Provider>
}

const useAuthContext = (): IAuthContext => useContext(authContext)

export { AuthContextProvider, useAuthContext }
