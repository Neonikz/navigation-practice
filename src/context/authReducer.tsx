import { AuthState } from "./AuthContext";

type AuthAction =
    | { type: 'signIn' }
    | { type: 'logOut' }
    | { type: 'changeFavIcon', payload: string }
    | { type: 'changeUserName', payload: string }


export const authReducer = (state: AuthState, action: AuthAction): AuthState => {

    switch (action.type) {
        case 'signIn':
            return {
                ...state,
                isLoggedIn: true,
                userName: 'Neonikz'
            }
        case 'changeFavIcon':
            return {
                ...state,
                favoriteIcon: action.payload
            }
        case 'logOut':
            return {
                ...state,
                isLoggedIn: false,
                userName: undefined,
                favoriteIcon: undefined
            }
        case 'changeUserName':
            return {
                ...state,
                userName: action.payload
            }

        default:
            return state;
    }

}
