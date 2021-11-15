import { GET_USER_DATA, SET_USER_DATA } from './actionTypes'

interface IncrementCounterAction {
  type: typeof GET_USER_DATA
}
interface DecrementCounterAction {
  type: typeof SET_USER_DATA
}
export type CounterActionTypes = IncrementCounterAction | DecrementCounterAction

export interface SystemState {
  isOpen: boolean
  isAuthenticating: boolean
  authData: any
  userSession: any
  authOptions: {
    redirectTo: string
    manifestPath: string
    onFinish: () => void
    authOrigin: any
    sendToSignIn: boolean
    appDetails: {
      name: string
      icon: string
    }
  }
}
