import React, { createContext, useReducer } from 'react'
import authReducer from './authReducer';

//state interface
export interface AuthState {
  isLoggedIn: boolean,
  username?: string,
  favoriteIcon?:string
}

//initial state
export const authInitialState: AuthState = {
  isLoggedIn: false,
  username: undefined,
  favoriteIcon:undefined
}

// se usa esta interfaz para que React sepa que tiene el context
export interface AuthContextProps  {
  authState: AuthState,
  signIn: () => void,
  logOut:() => void,
  changeFavIcon: (iconName:string) => void,
  changeUsername: (username: string) => void
}

export const AuthContext = createContext({} as AuthContextProps);

export const AuthProvider = ({ children }: any) => {

  const [authState, dispatch] = useReducer(authReducer, authInitialState)


  const signIn = () => {
    dispatch({type: 'singIn'})
  }

  const logOut = () => {
    dispatch({type: 'logOut'})
  }

  const changeFavIcon = (iconName: string) => {
    dispatch({type: 'changeFavIcon', payload: iconName})
  }

  const changeUsername = (username: string) => {
    dispatch({type: 'changeUsername', payload: username})
  }


  return (
    <AuthContext.Provider
      value={{
        authState,
        signIn,
        logOut,
        changeFavIcon,
        changeUsername
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}