/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import { Person } from '@stacks/profile'
import { useAtom } from 'jotai'
import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import {
  useConnect,
  userSessionState,
  userDataState,
  profileState,
} from '../hooks/useConnect'

export function shortenHex(hex: string, length = 4) {
  return `${hex.substring(0, length + 2)}…${hex.substring(hex.length - length)}`
}

export const truncateMiddle = (input: string, offset = 5): string => {
  if (!input) return ''
  // hashes
  if (input.startsWith('0x')) {
    return shortenHex(input, offset)
  }
  // for contracts
  if (input.includes('.')) {
    const parts = input.split('.')
    const start = parts[0]?.substr(0, offset)
    const end = parts[0]?.substr(parts[0].length - offset, parts[0].length)
    return `${start}…${end}.${parts[1]}`
  }
  // everything else
  const start = input?.substr(0, offset)
  const end = input?.substr(input.length - offset, input.length)
  return `${start}…${end}`
}

export const Navbar: React.FC = () => {
  const [userSession] = useAtom(userSessionState)
  const [profile, setProfile] = useAtom(profileState)
  const { handleOpenAuth, handleSignOut } = useConnect()
  const [, setUserData] = useAtom(userDataState)

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
  }, [userSession, setUserData, userSession.isUserSignedIn()])

  return (
    <nav>
      <div className="nav-wrapper darken-1 px1">
        <NavLink to="/" className="brand-logo">
          Bubo.gg
        </NavLink>
        {/* <ul id="nav-mobile" className="left hide-on-med-and-down">
         
        </ul> */}

        <ul className="right hide-on-med-and-down">
          <li>
            <NavLink to="/collection">Collection</NavLink>
          </li>
          {userSession.isUserSignedIn() ? (
            <li>
              <NavLink to="/profile">
                {profile ? truncateMiddle(profile.stxAddress.mainnet, 4) : ''}
              </NavLink>
            </li>
          ) : (
            <div className="connect-button" onClick={handleOpenAuth}>
              {/* <NavLink to="/">Home</NavLink> */}
              <p>Connect Wallet</p>
            </div>
          )}

          {/* <NavLink to="/about">About</NavLink> */}
          {userSession.isUserSignedIn() && (
            <li onClick={handleSignOut}>Logout</li>
          )}
        </ul>
      </div>
    </nav>
  )
}
