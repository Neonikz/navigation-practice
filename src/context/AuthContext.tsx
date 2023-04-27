import React, { createContext, useReducer } from 'react'
import { authReducer } from './authReducer';

export interface AuthState {
    isLoggedIn: boolean;
    userName?: string;
    favoriteIcon?: string;
}

export interface AuthContextProps {
    authState: AuthState;
    signIn: () => void;
    logOut: () => void;
    changeFavoriteIcon: (iconName: string) => void;
    changeUsername: (userName: string) => void;
}

export const authInitialState: AuthState = {
    isLoggedIn: false,
}

export const AuthContext = createContext({} as AuthContextProps)

export const AuthProvider = ({ children }: any) => {

    const [authState, dispatch] = useReducer(authReducer, authInitialState)

    const signIn = () => dispatch({ type: 'signIn' })

    const logOut = () => dispatch({ type: 'logOut' })

    const changeFavoriteIcon = (iconName: string) => dispatch({ type: 'changeFavIcon', payload: iconName })

    const changeUsername = (userName: string) => dispatch({ type: 'changeUserName', payload: userName })

    return (
        <AuthContext.Provider value={{
            authState,
            signIn,
            logOut,
            changeFavoriteIcon,
            changeUsername,
        }}>
            {children}
        </AuthContext.Provider>
    )
}

