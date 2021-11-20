/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { Fragment, useEffect } from 'react'
// import { AddressNftListResponseToJSON } from '@stacks/blockchain-api-client'
import { useAtom } from 'jotai'
// import { accountsApi } from '../constants'
import { profileState } from '../hooks/useConnect'
import { accountsApi } from '../constants'
import { BuboCityImage, useCollections } from '../hooks/useCollection'

export const Profile: React.FC = () => {
  const [profile] = useAtom(profileState)
  const { getOwnedCollection, ownedCollections } = useCollections()

  useEffect(() => {
    const ownedNFT = accountsApi.getAccountNft({
      principal: profile.stxAddress.testnet,
    })
    getOwnedCollection([1, 3, 4, 5, 6])
  }, [])

  return (
    <Fragment>
      <div className="profile">
        <h1>My Bubos</h1>
        <p>
          Below are your bubos. the stamina of all of your owned bubos are
          compined into your wallet stamina.
        </p>
        <div className="game-cards-container">
          {ownedCollections.length > 0 &&
            ownedCollections.map((collection: BuboCityImage) => {
              const Stamina = collection.attributes.find((attribute) => {
                return attribute.trait_type === 'Stamina'
              })
              return (
                <div className="game-card">
                  <img
                    className="bubo-image"
                    src={collection.image_url}
                    alt="bubo"
                  />
                  <div className="game-content">
                    <p>Bubo #{collection.id}</p>
                    <p>Stamina: {Stamina?.value}</p>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </Fragment>
  )
}
