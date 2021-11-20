/* eslint-disable import/no-cycle */
import { Connect } from '@stacks/connect-react'
import { Person } from '@stacks/profile'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Navbar } from './components/Navbar'
import {
  userDataState,
  userSessionState,
  useConnect,
  profileState,
} from './hooks/useConnect'
import { Collection } from './pages/Collection'

import { Home } from './pages/Home'
import { Profile } from './pages/Profile'

const App: React.FC = () => {
  const [userSession] = useAtom(userSessionState)
  const [, setUserData] = useAtom(userDataState)
  const [, setProfile] = useAtom(profileState)
  const { authOptions } = useConnect()

  const getPerson = () => {
    if (userSession.isUserSignedIn()) {
      setProfile(new Person(userSession.loadUserData().profile).profile())
    }
    return null
  }
  useEffect(() => {
    if (userSession?.isUserSignedIn()) {
      setUserData((userSession as any).loadUserData())
      getPerson()
    } else if (userSession.isSignInPending()) {
      userSession.handlePendingSignIn()
    }
  }, [userSession, setUserData])

  return (
    <Connect authOptions={authOptions}>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <Route path="/" component={Home} exact />
          </Switch>
          <Switch>
            <Route path="/collection" component={Collection} exact />
          </Switch>
          <Switch>
            <Route path="/profile" component={Profile} exact />
          </Switch>
        </div>
        <div className="footer">
          <h1>Bubo.gg</h1>
          <p>
            Do you have what it takes to ace the ghastly missions that awaits
            you?
          </p>
        </div>
      </BrowserRouter>
    </Connect>
  )
}

export default App
