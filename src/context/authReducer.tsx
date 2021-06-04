import { AuthState } from './AuthContext';

type authActions = 
| { type: 'singIn' }
| { type : 'logOut'}
| { type: 'changeFavIcon', payload: string }
| { type: 'changeUsername', payload: string}

const authReducer = (state: AuthState, action:authActions):AuthState => {
  switch(action.type){
    case 'singIn':
      return {...state, isLoggedIn: true, username: 'no-user-yet'}
    case 'logOut':
      return {...state, isLoggedIn: false, username: undefined, favoriteIcon: undefined }
    case 'changeFavIcon':
      return {...state, favoriteIcon: action.payload }
    case 'changeUsername':
      return {...state, username: action.payload}
    default:
      return state
  }
}


export default authReducer;