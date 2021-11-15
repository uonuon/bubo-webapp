import { AuthOptions, FinishedAuthData, UserSession } from '@stacks/connect'
import { GET_USER_DATA, SET_USER_DATA } from './actionTypes'
import { CounterActionTypes } from './types'

type State = {
  isOpen: boolean
  isAuthenticating: boolean
  authData?: FinishedAuthData
  authOptions: AuthOptions
  userSession?: UserSession
}

const initialState: State = {
  isOpen: false,
  isAuthenticating: false,
  authData: undefined,
  userSession: undefined,
  authOptions: {
    redirectTo: '',
    manifestPath: '',
    onFinish: () => null,
    authOrigin: undefined,
    sendToSignIn: false,
    appDetails: {
      name: '',
      icon: '',
    },
  },
}

export default (state = initialState, action: CounterActionTypes) => {
  switch (action.type) {
    case SET_USER_DATA:
      return { ...state, value: state.userSession }
    case GET_USER_DATA:
      return state.userSession
    default:
      return state
  }
}
